import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    year: {
        type: Number,
    },
    id: {
        type: Number,
    },

})

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;