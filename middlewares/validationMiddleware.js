import userSchema from "../schemas/userSchema.js";

const validateSchema = (params) => (req, res, next) => {
  const result = params.safeParse(req.body);

  if (params === userSchema) {
    if (!result.success) {
      throw new Error(
        "Name, email, and password are required and in the right form.",
        { cause: 400 }
      );
    }
  }

  next();
};

export default validateSchema;
