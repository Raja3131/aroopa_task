import Movie from "../models/MovieModel.js";

export const getAllMovies = async(req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const searchMovies = async(req, res) => {
    try {
        const movies = await Movie.find({ title: { $regex: req.query.title, $options: "i" } }).skip(parseInt(req.query.skip)).limit(parseInt(req.query.limit));
        res.status(200).json({
            movies: movies,
            total: movies.length,
            page: parseInt(req.query.page),
            per_page: parseInt(req.query.per_page),
            total_pages: Math.ceil(movies.length / parseInt(req.query.per_page))

        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}