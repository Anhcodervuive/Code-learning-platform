import Link from "next/link";
import { CheckCircle, Circle } from "lucide-react";
import DifficultyBadge from "./difficulty-badge";
import type { Difficulty } from "generated/prisma";

type Problem = {
    id: string;
    title: string;
    slug: string;
    difficulty: Difficulty;
    timeLimitMs: number;
    memoryLimitMb: number;
    isSolved: boolean;
}

type ProblemRowProps = {
    problem: Problem
};

export const ProblemRow = ({ problem }: ProblemRowProps) => {
    return (
        <Link
            href={`/problems/${problem.slug}`}
            className="
        group flex items-center justify-between
        rounded-lg border border-border
        px-4 py-3
        transition
        hover:bg-muted/50
      "
        >
            <div className="flex items-center gap-3">
                {problem.isSolved ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                )}

                <div>
                    <div className="font-medium group-hover:underline">
                        {problem.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                        {problem.timeLimitMs ?? "—"} ms ·{" "}
                        {problem.memoryLimitMb ?? "—"} MB
                    </div>
                </div>
            </div>

            <DifficultyBadge difficulty={problem.difficulty} />
        </Link>
    );
};
