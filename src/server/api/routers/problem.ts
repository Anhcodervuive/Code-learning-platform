import { createTRPCRouter, adminProcedure, protectedProcedure } from "../trpc";
import {
    createProblemSchema,
    problemListFilterSchema,
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

    listPublicWithStatus: protectedProcedure
        .input(problemListFilterSchema.optional())
        .query(async ({ ctx, input }) => {
            const userId = ctx.session.user.id;

            const problems = await ctx.db.problem.findMany({
                where: {
                    status: "PUBLISHED",
                    ...(input?.difficulty && { difficulty: input.difficulty }),
                },
                orderBy: {
                    createdAt: "desc",
                },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    difficulty: true,
                    timeLimitMs: true,
                    memoryLimitMb: true,
                    submissions: {
                        where: {
                            userId,
                            status: "DONE",
                        },
                        select: { id: true },
                    },
                },
            });

            const mapped = problems.map((p) => ({
                id: p.id,
                title: p.title,
                slug: p.slug,
                difficulty: p.difficulty,
                timeLimitMs: p.timeLimitMs,
                memoryLimitMb: p.memoryLimitMb,
                isSolved: p.submissions.length > 0,
            }));

            if (input?.solved === undefined) {
                return mapped;
            }

            return mapped.filter((p) =>
                input.solved ? p.isSolved : !p.isSolved,
            );
        }),
});
