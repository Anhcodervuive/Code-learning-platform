import { api } from "~/trpc/server";
import { ProblemList } from "~/app/_components/problem/problem-list";

const ProblemsPage = async () => {
    const problems = await api.problem.listPublicWithStatus();

    return (
        <div className="mx-auto max-w-4xl space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Problems</h1>
                <p className="text-muted-foreground">
                    Learn by solving real-world coding problems
                </p>
            </header>

            <ProblemList problems={problems} />
        </div>
    );
};

export default ProblemsPage;
