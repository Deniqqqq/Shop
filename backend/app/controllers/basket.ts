import BasketModel, { IBasket } from "../models/basket";
import { Request, Response } from "express";

export const createBasket = async (
  req: Request<{}, {}, IBasket>,
  res: Response
) => {
  try {
    const basket = new BasketModel({
      userId: req.body.userId,
      productList: req.body.productList,
    });

    await basket.save();

    res.json(basket);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const readBasket = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const basketId = req.params.id;

    const user = await BasketModel.findById(basketId);

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти корзину",
      });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const readAllBasket = async (req: Request, res: Response) => {
  try {
    const baskets = await BasketModel.find();

    res.json(baskets);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const updateBasket = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const basketId = req.params.id;

    const basket = await BasketModel.findByIdAndUpdate(
      basketId,
      {
        title: req.body.title,
        img: req.body.img,
      },
      {
        returnDocument: "after",
      }
    );

    if (!basket) {
      return res.status(400).json({
        message: "Не удалось найти корзину",
      });
    }

    res.json(basket);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const deleteBasket = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const basketId = req.params.id;

    const user = await BasketModel.findByIdAndDelete(basketId);

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти категорию",
      });
    }

    res.json({
      message: "Категория успешно удалена",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};
