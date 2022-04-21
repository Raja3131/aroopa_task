import Board from "../models/BoardModel.js";

export const getAllBoards = async (req, res) => {
    try {
        const boards = await Board.find();
        res.status(200).json({
            success: true,
            data: boards
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}

export const createBoard = async (req, res) => {
    try {
        const newBoard = await Board.create({
            title: req.body.title,

        });
       

        res.status(201).json({
            success: true,
            data: newBoard,
            message: "Created Kanban Board Item Object"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}

export const updateBoard = async (req, res) => {
    try {
        const updatedBoard = await Board.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        });
        res.status(200).json({
            success: true,
            data: updatedBoard,
            message: "Updated Kanban Board Item Object"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
}