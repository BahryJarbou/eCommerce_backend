import { Router } from "express";
import { validateSchema } from "../middlewares/validationMiddleware.js";
import UserSchema from "../schemas/userSchema.js";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const userRouter = Router();
userRouter.route("/").get(getUsers);
userRouter.route("/:id").get(getUserById);
userRouter.route("/:id").delete(deleteUser);

userRouter.use(validateSchema(UserSchema));
userRouter.route("/").post(createUser);
userRouter.route("/:id").put(updateUser);

export default userRouter;
