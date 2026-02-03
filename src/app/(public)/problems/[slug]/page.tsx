import { api } from "~/trpc/server";
import { notFound } from "next/navigation";
import { ProblemHeader } from "./_components/problem-header";
import { ProblemContent } from "./_components/problem-content";
import { SolvePanel } from "./_components/solve-panel";

type Props = {
    params: Promise<{ slug: string }>;
};

const ProblemDetailPage = async ({ params }: Props) => {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    const problem = await api.problem.getBySlugForUser({
        slug: slug,
    });

    if (!problem) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-7xl space-y-6 px-4 py-6">
            <ProblemHeader problem={problem} />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Left: Problem */}
                <ProblemContent problem={problem} />

                {/* Right: Editor */}
                <SolvePanel problemId={problem.id} />
            </div>
        </div>
    );
};

export default ProblemDetailPage;
