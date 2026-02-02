import { z } from "zod";

export const createTestcaseInUISchema = z.object({
    input: z.string(),
    expected: z.string(),
    isHidden: z.boolean().default(true),
});

export const createTestcaseSchema = createTestcaseInUISchema.extend({
    problemId: z.string(),
});

export type CreateTestcaseInput = z.infer<typeof createTestcaseInUISchema>;