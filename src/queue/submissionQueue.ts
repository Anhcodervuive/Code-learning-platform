/* eslint-disable @typescript-eslint/consistent-generic-constructors */

import { Queue } from "bullmq";
import IORedis from "ioredis";
import { env } from "~/env";

const connection = new IORedis(env.REDIS_URL);

export interface AttemptJobData {
    language: 'JAVASCRIPT' | 'PYTHON' | 'CPP'
    mode: 'SUBMIT' | 'ATTEMPT';
    code: string;
    problemId: string,
}

export const submissionQueue: Queue<
    AttemptJobData,
    void,
    string
> = new Queue("codeRun", {
    connection,
});
