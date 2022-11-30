import mongoose from "mongoose";

export interface IProductInfo {
  productId: mongoose.Types.ObjectId;
  brand: string;
  composition: string;
  nutritionValuePer100g: string;
  shelfLive: string;
  storageConditions: string;
  packaging: string;
  imgList: string[];
}

const productInfoSchema = new mongoose.Schema<IProductInfo>(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    brand: {
      type: String,
      required: true,
    },
    composition: {
      type: String,
      required: true,
    },
    nutritionValuePer100g: {
      type: String,
      required: true,
    },
    shelfLive: {
      type: String,
      required: true,
    },
    storageConditions: {
      type: String,
      required: true,
    },
    packaging: {
      type: String,
      required: true,
    },
    imgList: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProductInfo>("productInfo", productInfoSchema);
