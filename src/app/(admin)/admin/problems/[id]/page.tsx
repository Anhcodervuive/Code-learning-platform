import { notFound } from "next/navigation";
import { api } from "~/trpc/server";

import { ProblemHeader } from "./_components/problem-header";
import { ProblemOverview } from "./_components/problem-overview";
import { ProblemTestcases } from "./_components/problem-testcases";

export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{ id: string }>;
};

const ProblemDetailPage = async ({ params }: Props) => {
    const { id } = await params;
    const problem = await api.problem.getById(id);

    if (!problem) notFound();

    const testcases = await api.testcase.listByProblem(id);

    const hiddenCount = testcases.filter((t) => t.isHidden).length;

    return (
        <div className="space-y-8">
            <ProblemHeader problem={problem} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main content */}
                <div className="lg:col-span-2">
                    <ProblemOverview problem={problem} />
                </div>

                {/* Sidebar */}
                <div>
                    <ProblemTestcases
                        total={testcases.length}
                        hidden={hiddenCount}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProblemDetailPage;
