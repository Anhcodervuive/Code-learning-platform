import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

import type { Problem } from "generated/prisma";

type Props = {
    problem: Problem;
};

export const ProblemHeader = ({ problem }: Props) => {
    return (
        <div className="flex items-start justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold">{problem.title}</h1>

                <div className="mt-2 flex items-center gap-2">
                    <Badge variant="outline">{problem.difficulty}</Badge>
                    <Badge
                        variant={problem.status === "PUBLISHED" ? "default" : "secondary"}
                    >
                        {problem.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                        {problem.timeLimitMs}ms · {problem.memoryLimitMb}MB
                    </span>
                </div>
            </div>

            <div className="flex gap-2">
                <Button asChild variant="outline">
                    <Link href={`/admin/problems/${problem.id}/edit`}>
                        Edit problem
                    </Link>
                </Button>

                <Button asChild>
                    <Link href={`/admin/problems/${problem.id}/testcases`}>
                        Manage testcases
                    </Link>
                </Button>
            </div>
        </div>
    );
};
