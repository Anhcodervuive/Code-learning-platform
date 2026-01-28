// src/server/api/routers/auth.ts
import { hash } from "bcryptjs"
import { createTRPCRouter, publicProcedure } from "../trpc"
import { signUpSchema } from "~/schemas/auth"
import { TRPCError } from "@trpc/server"

export const authRouter = createTRPCRouter({
    register: publicProcedure
        .input(signUpSchema)
        .mutation(async ({ ctx, input }) => {
            const exists = await ctx.db.user.findUnique({
                where: { email: input.email },
            })

            if (exists) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "Email already registered",
                })
            }

            const passwordHash = await hash(input.password, 12)

            await ctx.db.user.create({
                data: {
                    email: input.email,
                    name: input.name,
                    password: passwordHash,
                },
            })

            return { success: true }
        }),
})
