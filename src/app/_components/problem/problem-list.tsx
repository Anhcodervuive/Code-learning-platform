import type { Difficulty } from "generated/prisma";
import { ProblemRow } from "./problem-row";

type Problem = {
    id: string;
    title: string;
    slug: string;
    difficulty: Difficulty;
    timeLimitMs: number;
    memoryLimitMb: number;
    isSolved: boolean;
}

export const ProblemList = ({
    problems,
}: {
    problems: Problem[];
}) => {
    return (
        <div className="space-y-2">
            {problems.map((p) => (
                <ProblemRow key={p.id} problem={p} />
            ))}
        </div>
    );
};
