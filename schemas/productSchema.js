import { z } from "zod/v4";

const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  categoryId: z.number().int(),
});

export default ProductSchema;
