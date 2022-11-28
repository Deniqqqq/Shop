import SubcategoryModel, { ISubcategory } from "../models/subcategory";
import { Request, Response } from "express";

export const createSubcategory = async (
  req: Request<{}, {}, ISubcategory>,
  res: Response
) => {
  try {
    const subcategory = new SubcategoryModel({
      title: req.body.title,
      img: req.body.img,
      categoryId: req.body.categoryId,
    });

    await subcategory.save();

    res.json(subcategory);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const readSubcategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const subcategoryId = req.params.id;

    const user = await SubcategoryModel.findById(subcategoryId);

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти подкатегорию",
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

export const readAllSubcategory = async (req: Request, res: Response) => {
  try {
    const subcategories = await SubcategoryModel.find();

    res.json(subcategories);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const updateSubcategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const subcategoryId = req.params.id;

    const category = await SubcategoryModel.findByIdAndUpdate(
      subcategoryId,
      {
        title: req.body.title,
        img: req.body.img,
        categoryId: req.body.categoryId,
      },
      {
        returnDocument: "after",
      }
    );

    if (!category) {
      return res.status(400).json({
        message: "Не удалось найти подкатегорию",
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

export const deleteSubcategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const subcategoryId = req.params.id;

    const user = await SubcategoryModel.findByIdAndDelete(subcategoryId);

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти подкатегорию",
      });
    }

    res.json({
      message: "Подкатегория успешно удалена",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};
