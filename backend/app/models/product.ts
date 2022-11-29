import mongoose from "mongoose";

export interface IProduct {
  title: string;
  stok: number;
  price: number;
  img: string;
  subcategoryId: mongoose.Types.ObjectId;
  productInfoId: mongoose.Types.ObjectId;
}

const productSchema = new mongoose.Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    stok: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: String,
    subcategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productInfoId: mongoose.Schema.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProduct>("Product", productSchema);
