import ProductInfoModel, { IProductInfo } from "../models/productInfo";
import { Request, Response } from "express";

export const readProductInfo = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const productInfoId = req.params.id;

    const productInfo = await ProductInfoModel.findById(productInfoId);

    if (!productInfo) {
      return res.status(400).json({
        message: "Не удалось найти информацию продукта",
      });
    }

    res.json(productInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const readAllProductInfo = async (req: Request, res: Response) => {
  const productsInfo = await ProductInfoModel.find();

  res.json(productsInfo);
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const createProductInfo = async (
  req: Request<{}, {}, IProductInfo>,
  res: Response
) => {
  try {
    const productInfo = new ProductInfoModel({
      brand: req.body.brand,
      composition: req.body.composition,
      imgList: req.body.imgList,
      nutritionValuePer100g: req.body.nutritionValuePer100g,
      packaging: req.body.packaging,
      productId: req.body.productId,
      shelfLive: req.body.shelfLive,
      storageConditions: req.body.storageConditions,
    });

    await productInfo.save();

    res.json(productInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const updateProductInfo = async (
  req: Request<{ id: string }, {}, IProductInfo>,
  res: Response
) => {
  try {
    const productInfoId = req.params.id;

    const productInfo = await ProductInfoModel.findByIdAndUpdate(
      productInfoId,
      {
        brand: req.body.brand,
        composition: req.body.composition,
        imgList: req.body.imgList,
        nutritionValuePer100g: req.body.nutritionValuePer100g,
        packaging: req.body.packaging,
        productId: req.body.productId,
        shelfLive: req.body.shelfLive,
        storageConditions: req.body.storageConditions,
      },
      {
        returnDocument: "after",
      }
    );

    if (!productInfo) {
      return res.status(400).json({
        message: "Не удалось найти",
      });
    }

    res.json(productInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const deleteProductInfo = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const productInfoId = req.params.id;

    const productInfo = await ProductInfoModel.findByIdAndDelete(productInfoId);

    if (!productInfo) {
      return res.status(400).json({
        message: "Не удалось найти информацию товара",
      });
    }

    res.json({
      message: "Информация о товаре успешно удалена",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};
