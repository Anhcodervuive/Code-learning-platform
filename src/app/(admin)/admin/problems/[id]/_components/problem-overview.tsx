import { MarkdownRenderer } from "~/app/_components/editor/markdown-renderer";
import { Separator } from "~/components/ui/separator";

import type { Problem } from "generated/prisma";

type Props = {
    problem: Problem;
};

export const ProblemOverview = ({ problem }: Props) => {
    return (
        <div className="space-y-8">
            {/* Description */}
            <section className="space-y-2">
                <h2 className="text-lg font-semibold">Description</h2>
                <MarkdownRenderer content={problem.description} />
            </section>

            {/* Hint */}
            {problem.hint && (
                <>
                    <Separator />
                    <section className="space-y-2">
                        <h2 className="text-lg font-semibold">Hint</h2>
                        <p className="text-muted-foreground whitespace-pre-wrap">
                            {problem.hint}
                        </p>
                    </section>
                </>
            )}

            {/* Editorial */}
            {problem.editorial && (
                <>
                    <Separator />
                    <section className="space-y-2">
                        <h2 className="text-lg font-semibold">Editorial</h2>
                        <MarkdownRenderer content={problem.editorial} />
                    </section>
                </>
            )}
        </div>
    );
};
