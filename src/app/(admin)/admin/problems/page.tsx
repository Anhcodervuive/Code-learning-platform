import { api } from "~/trpc/server";
import { ProblemTable } from "~/app/_components/admin/problem-table";

export default async function AdminProblemsPage() {
    const problems = await api.problem.list();

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Problems</h1>
            <ProblemTable data={problems} />
        </div>
    );
}
