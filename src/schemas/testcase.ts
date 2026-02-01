import { z } from "zod";

export const createTestcaseSchema = z.object({
    problemId: z.string(),
    input: z.string(),
    expected: z.string(),
    isHidden: z.boolean().default(true),
});

export type CreateTestcaseInput = z.infer<typeof createTestcaseSchema>;