import { z } from "zod/v4";

const UserSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

export default UserSchema;
