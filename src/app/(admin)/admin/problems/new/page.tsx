'use client'

import { useRouter } from "next/navigation";
import { ProblemForm } from "~/app/_components/admin/problem-form";
import type { CreateProblemInput } from "~/schemas";
import { api } from "~/trpc/react";

export default function NewProblemPage() {
    const router = useRouter()
    const util = api.useUtils()
    const createProblemMutation = api.problem.create.useMutation({
        onSuccess: async () => {
            await util.problem.list.invalidate()
            router.replace(`/admin/problems`, {})
        }
    });

    const onCreate = (data: CreateProblemInput) => {
        createProblemMutation.mutate(data);
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Create Problem</h1>
            <ProblemForm onSubmit={onCreate} />
        </div>
    );
}
