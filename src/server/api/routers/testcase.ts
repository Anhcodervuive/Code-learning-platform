import { adminProcedure, createTRPCRouter } from "../trpc";
import { createTestcaseSchema } from "~/schemas/testcase";

export const testcaseRouter = createTRPCRouter({
    listByProblem: adminProcedure
        .input(String)
        .query(({ input, ctx }) => {
            return ctx.db.testCase.findMany({
                where: { problemId: input },
                orderBy: { createdAt: "asc" },
            });
        }),

    create: adminProcedure
        .input(createTestcaseSchema)
        .mutation(({ input, ctx }) => {
            return ctx.db.testCase.create({
                data: input,
            });
        }),

    delete: adminProcedure
        .input(String)
        .mutation(({ input, ctx }) => {
            return ctx.db.testCase.delete({
                where: { id: input },
            });
        }),

    deleteByProblem: adminProcedure
        .input(String)
        .mutation(({ input, ctx }) => {
            return ctx.db.testCase.deleteMany({
                where: { problemId: input },
            });
        }),
});
