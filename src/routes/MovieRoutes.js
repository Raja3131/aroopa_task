import express from "express";
import { getAllMovies,searchMovies } from "../controllers/MovieController.js";

const MovieRouter = express.Router();

MovieRouter.get("/", getAllMovies);
MovieRouter.get("/search", searchMovies);


export default MovieRouter;