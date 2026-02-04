import { MarkdownRenderer } from "~/app/_components/editor/markdown-renderer";

export const ProblemContent = ({
    problem,
}: {
    problem: {
        description: string;
        hint?: string | null;
    };
}) => {
    return (
        <div className="rounded-xl border bg-card p-6 space-y-6 max-h-180 overflow-auto">
            <MarkdownRenderer content={problem.description} />

            {problem.hint && (
                <div className="border-t pt-4">
                    <h3 className="mb-2 font-semibold">Hint</h3>
                    <MarkdownRenderer content={problem.hint} />
                </div>
            )}
        </div>
    );
};
