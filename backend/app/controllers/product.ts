import ProductModel, { IProduct } from "../models/product";
import { Request, Response } from "express";

export const readProduct = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const productId = req.params.id;

    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(400).json({
        message: "Не удалось найти найти продукт",
      });
    }

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const readAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const createProduct = async (
  req: Request<{}, {}, IProduct>,
  res: Response
) => {
  try {
    console.log("RERERERE");
    const product = new ProductModel({
      title: req.body.title,
      img: req.body.img,
      price: req.body.price,
      stok: req.body.stok,
      productInfoId: req.body.productInfoId,
      subcategoryId: req.body.subcategoryId,
    });

    await product.save();

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const updateProduct = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const productId = req.params.id;

    const product = await ProductModel.findByIdAndUpdate(
      productId,
      {
        title: req.body.title,
        img: req.body.img,
        price: req.body.price,
        stok: req.body.stok,
        productInfoId: req.body.productInfoId,
        subcategoryId: req.body.subcategoryId,
      },
      {
        returnDocument: "after",
      }
    );

    if (!product) {
      return res.status(400).json({
        message: "Не удалось найти продукт",
      });
    }

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const deleteProduct = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const productId = req.params.id;

    const product = await ProductModel.findByIdAndDelete(productId);

    if (!product) {
      return res.status(400).json({
        message: "Не удалось найти продукт",
      });
    }

    res.json({
      message: "Продукт успешно удален",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};
