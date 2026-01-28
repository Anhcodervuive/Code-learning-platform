import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
})

export const signUpSchema = signInSchema.extend({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(1).optional(),
})


