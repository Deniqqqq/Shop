import mongoose from "mongoose";
import { deflate } from "zlib";

export interface IBasket {
  userId: mongoose.Types.ObjectId;
  productList: mongoose.Types.ObjectId[];
}

const basketSchema = new mongoose.Schema<IBasket>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
      unique: true,
    },
    productList: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBasket>("Basket", basketSchema);
