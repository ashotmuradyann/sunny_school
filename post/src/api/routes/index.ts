import express from "express";
import { allPosts } from "../controllers/posts";

const router = express.Router();

router.get("/", allPosts);

export { router };
