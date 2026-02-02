"use client";

export const dynamic = "force-dynamic";

import { useParams, useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { ProblemForm } from "~/app/_components/admin/problem-form";
import type { CreateProblemInput } from "~/schemas";

export default function EditProblemPage() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter()
    const util = api.useUtils()
    const { data: problem, isLoading } = api.problem.getById.useQuery(id);
    const update = api.problem.update.useMutation({
        onSuccess: async () => {
            await util.problem.list.invalidate()
            router.replace(`/admin/problems`, {})
        }
    });

    const handleUpdate = async (data: CreateProblemInput) => {
        update.mutate({ id, ...data })
    }

    if (isLoading) return <div>Loading...</div>;
    if (!problem) return <div>Not found</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Edit Problem</h1>

            <ProblemForm
                defaultValues={problem}
                onSubmit={handleUpdate}
            />
        </div>
    );
}
