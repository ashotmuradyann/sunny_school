import { Request, Response } from "express";
import User from "../../models/UserModel";
import jwt from "jsonwebtoken";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = User.build({ email, password });
    await user.save();

    const userJwt = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "ahavor_secret_key"
    );

    return res.status(201).json({ token: userJwt });
  } catch (error) {
    console.error(error);
  }
};
