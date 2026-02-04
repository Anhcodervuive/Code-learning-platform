import { createRunRequest } from "~/schemas/submission";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { submissionQueue } from "~/queue/submissionQueue";

export const submissionRouter = createTRPCRouter({

    // The run procedure will 2 handle both 2 case: Attemp and Submit
    run: protectedProcedure.input(createRunRequest).mutation(async ({ input }) => {
        const { code, language, mode, problemId } = input

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        await submissionQueue.add('codeRun', {
            code,
            language,
            problemId,
            mode,
        })

        return {
            code,
            language,
            problemId,
            mode,
        }
    })
})