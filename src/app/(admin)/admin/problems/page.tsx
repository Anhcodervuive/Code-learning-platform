import { api } from "~/trpc/server";
import { ProblemTable } from "~/app/_components/admin/problem-table";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default async function AdminProblemsPage() {
    const problems = await api.problem.list();

    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Problems</h1>
                <Button asChild>
                    <Link href="/admin/problems/new">New</Link>
                </Button>
            </div>
            <ProblemTable data={problems} />
        </div>
    );
}
