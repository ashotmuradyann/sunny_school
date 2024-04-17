import { Request, Response } from "express";

export const allPosts = async (req: Request, res: Response) => {
  res.json({ message: [] });
};
