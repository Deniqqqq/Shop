import mongoose from "mongoose";

export interface ICategory {
  title: string;
  img: string;
}

const categorySchema = new mongoose.Schema<ICategory>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICategory>("Category", categorySchema);
