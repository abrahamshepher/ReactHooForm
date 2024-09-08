import { z } from 'zod';
import { patterns } from '../../constants';

export const schema = z.object({
  name: z.string().min(1,{message:"Name is required"}),
  email: z.string().min(1, { message: "Email is required" }).refine((text) => patterns.email.test(text), { message: "Invalid email" }),
  states:z.array(z.string()).min(1,{message:"At least one state is required"}).max(5,{message:"Maximum of 5 states"}),
});

export type Schema = z.infer<typeof schema>;

export const initialValues: Schema = {
  name: "",
  email: "",
  states: []
};