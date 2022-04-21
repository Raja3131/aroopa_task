import mongoose from "mongoose";
import Inc from "mongoose-sequence";
const AutoIncrement = Inc(mongoose);
const boardSchema = new mongoose.Schema(
  {
    _id: Number,
   
    title: {
      type: String,
    },
    stage: {
      type: Number,
      default: 1,
    },
  },
  { _id: false }


);

boardSchema.plugin(AutoIncrement);

const Board = mongoose.model("Board", boardSchema);

export default Board;
