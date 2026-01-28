import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
})

export const signUpSchema = signInSchema.extend({
    name: z.string().min(1).optional(),
})

export type signInInput = z.infer<typeof signInSchema>;
export type signUpInput = z.infer<typeof signUpSchema>;