import mongoose from "mongoose";

export interface ISubcategory {
  title: string;
  img: string;
  categoryId: mongoose.Types.ObjectId;
}

const subcategorySchema = new mongoose.Schema<ISubcategory>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    img: String,
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISubcategory>("Subcategory", subcategorySchema);
