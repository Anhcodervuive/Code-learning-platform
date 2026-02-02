import { z } from "zod";

export const ProblemDifficulty = z.enum(["EASY", "MEDIUM", "HARD"]);
export const ProblemStatus = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);

export const createProblemSchema = z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    description: z.string(),
    difficulty: ProblemDifficulty,
    status: ProblemStatus.optional(),

    // judge config
    timeLimitMs: z.coerce.number().int().positive().optional(),
    memoryLimitMb: z.coerce.number().int().positive().optional(),

    // learning content
    hint: z.string().optional().nullable(),
    editorial: z.string().optional().nullable(),
});

export const updateProblemSchema = createProblemSchema.extend({
    id: z.string(),
});

export type CreateProblemInput = z.infer<typeof createProblemSchema>;
export type UpdateProblemInput = z.infer<typeof updateProblemSchema>;