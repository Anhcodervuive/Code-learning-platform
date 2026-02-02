import { createTRPCRouter, adminProcedure } from "../trpc";
import {
    createProblemSchema,
    updateProblemSchema,
} from "~/schemas/problem";

export const problemRouter = createTRPCRouter({
    list: adminProcedure.query(async ({ ctx }) => {
        return ctx.db.problem.findMany({
            orderBy: { createdAt: "desc" },
        });

    }),

    getById: adminProcedure
        .input(String)
        .query(({ input, ctx }) => {
            return ctx.db.problem.findUnique({
                where: { id: input },
            });
        }),

    create: adminProcedure
        .input(createProblemSchema)
        .mutation(({ input, ctx }) => {
            return ctx.db.problem.create({
                data: {
                    ...input,
                    createdById: ctx.session!.user.id,
                },
            });
        }),

    update: adminProcedure
        .input(updateProblemSchema)
        .mutation(({ input, ctx }) => {
            const { id, ...data } = input;
            return ctx.db.problem.update({
                where: { id },
                data,
            });
        }),

    delete: adminProcedure
        .input(String)
        .mutation(({ input, ctx }) => {
            return ctx.db.problem.delete({
                where: { id: input },
            });
        }),
});
