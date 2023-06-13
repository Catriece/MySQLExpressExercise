import express from "express";
import productRouter from "./products.routes";

const router = express.Router();

// TODO: use the imported router to handle all routes matching "/users"
//matching /api already so if it further matches /users, I will use and send requests to userRouter
router.use("/products", productRouter);

export default router;
