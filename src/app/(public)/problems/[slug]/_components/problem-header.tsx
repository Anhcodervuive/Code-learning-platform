import DifficultyBadge from "~/app/_components/problem/difficulty-badge";


export const ProblemHeader = ({
    problem,
}: {
    problem: {
        title: string;
        difficulty: "EASY" | "MEDIUM" | "HARD";
        timeLimitMs?: number | null;
        memoryLimitMb?: number | null;
    };
}) => {
    return (
        <div className="space-y-1">
            <h1 className="text-2xl font-bold">{problem.title}</h1>

            <div className="flex items-center gap-3 text-sm">
                <DifficultyBadge difficulty={problem.difficulty} />
                <span className="text-muted-foreground">
                    {problem.timeLimitMs ?? "—"} ms ·{" "}
                    {problem.memoryLimitMb ?? "—"} MB
                </span>
            </div>
        </div>
    );
};
