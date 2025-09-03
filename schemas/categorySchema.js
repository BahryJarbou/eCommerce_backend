import { z } from "zod/v4";

const CategorySchema = z.object({
  name: z.string(),
});

export default CategorySchema;
