import { z } from "zod/v4";

const OrderSchema = z.object({
  userId: z.number().int(),
  products: z.array(z.number().int()), 
  total: z.number(),
  status: z.string().optional(),
});

export default OrderSchema;