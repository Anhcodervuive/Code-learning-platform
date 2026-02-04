import { z } from 'zod'

export const runMode = z.enum(['ATTEMPT', 'SUBMIT'])

export const supportedLanguages = z.enum(['JAVASCRIPT', 'PYTHON', 'CPP'])

export const createRunRequest = z.object({
    mode: runMode,
    problemId: z.string(),
    language: supportedLanguages,
    code: z.string()
})

