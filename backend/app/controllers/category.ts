import CategoryModel, { ICategory } from "../models/category";
import { Request, Response } from "express";

export const createCategory = async (
  req: Request<{}, {}, ICategory>,
  res: Response
) => {
  try {
    const category = new CategoryModel({
      title: req.body.title,
      img: req.body.img,
    });

    await category.save();

    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const readCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const categoryId = req.params.id;

    const user = await CategoryModel.findById(categoryId);

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти категорию",
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

export const readAllCategory = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();

    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const updateCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const categoryId = req.params.id;

    const category = await CategoryModel.findByIdAndUpdate(
      categoryId,
      {
        title: req.body.title,
        img: req.body.img,
      },
      {
        returnDocument: "after",
      }
    );

    if (!category) {
      return res.status(400).json({
        message: "Не удалось найти категорию",
      });
    }

    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const deleteCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const categoryId = req.params.id;

    const user = await CategoryModel.findByIdAndDelete(categoryId);

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
