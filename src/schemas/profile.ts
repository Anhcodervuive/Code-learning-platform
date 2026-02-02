import { z } from "zod";

export const updateProfileSchema = z.object({
    displayName: z.string().min(1).max(50).optional().nullable(),
    bio: z.string().max(500).optional().nullable(),
    avatarUrl: z.string().url().optional().nullable(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
