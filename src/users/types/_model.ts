import { z } from 'zod';
import { patterns } from '../../constants';

export const schema = z.object({
  name: z.string().min(1,{message:"Name is required"}),
  email: z.string().min(1, { message: "Email is required" }).refine((text) => patterns.email.test(text), { message: "Invalid email" }),
  states: z.array(z.string()).min(1, { message: "At least one state is required" }).max(5, { message: "Maximum of 5 states" }),
  languages: z.array(z.string()).min(1, { message: "At least one language is required" }).max(5, { message: "Maximum of 5 languages" }),
  genders: z.string().min(1, { message: "1 Gender is required" }),
  skills: z.array(z.string()).max(2),
  dateAndTime: z.date(),
  period: z.array(z.date()).max(2).min(2),
  range: z.array(z.number()).max(2).min(2),
  isActive: z.boolean()
});

export type Schema = z.infer<typeof schema>;

export const initialValues: Schema = {
  name: "",
  email: "",
  states: [],
  languages: [],
  genders: "",
  skills: [],
  dateAndTime: new Date(),
  period: [new Date(), new Date()],
  range: [0, 1000],
  isActive: false
};