import "./db/associations.js";
import express from "express";
import userRouter from "./routers/userRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
