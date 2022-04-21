import express from 'express';
import { getAllBoards,createBoard,updateBoard } from "../controllers/BoardController.js";

const BoardRoutes = express.Router();

BoardRoutes.get('/', getAllBoards);
BoardRoutes.post('/', createBoard);
BoardRoutes.put('/:id', updateBoard);

export default BoardRoutes;