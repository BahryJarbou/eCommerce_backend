import { z } from "zod/v4";

const product = z.object({
  productId: z.int(),
  quantity: z.int(),
});

const OrderSchema = z.object({
  userId: z.int(),
  products: z.array(product),
});

export default OrderSchema;
