import UserModel, { IUser } from "../models/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (
  req: Request<{}, {}, IUser>,
  res: Response
) => {
  try {
    const checkEmail = await UserModel.findOne({ email: req.body.email });

    if (checkEmail) {
      return res.status(400).json({
        message: "Данная почта уже зарегистрирована",
      });
    }

    const userPassword = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userPassword, salt);

    const user = new UserModel({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hash,
      phone: req.body.phone,
    });

    await user.save();

    const token = jwt.sign(
      {
        id: user.id,
      },
      "secret",
      {
        expiresIn: "7d",
      }
    );

    const { password, ...userData } = user.toObject();

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const readUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти пользователя",
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

export const readAllUser = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();

    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const updateUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const userId = req.params.id;

    const userPassword: string | undefined = req.body.password;

    let hash: undefined | string;

    if (!userPassword) {
      hash = undefined;
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(userPassword, salt);
    }

    const user = await UserModel.findByIdAndUpdate(
      userId,
      {
        fullName: req.body.fullName,
        email: req.body.email,
        password: hash,
        phone: req.body.phone,
      },
      {
        returnDocument: "after",
      }
    );

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти пользователя",
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

export const deleteUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findByIdAndDelete(userId);

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти пользователя",
      });
    }

    res.json({
      message: "Пользователь успешно удален",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};
