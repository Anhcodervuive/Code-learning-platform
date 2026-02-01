"use client";

import { useParams } from "next/navigation";
import { api } from "~/trpc/react";
import { TestcaseForm } from "~/app/_components/admin/testcase-form";
import { TestcaseTable } from "~/app/_components/admin/testcase-table";
import type { CreateTestcaseInput } from "~/schemas";

export default function TestcasePage() {
    const { id } = useParams<{ id: string }>();

    const { data: testcases } = api.testcase.listByProblem.useQuery(id);
    const create = api.testcase.create.useMutation({
        onSuccess() {
            // refetch list
        },
    });

    const handleCreate = async (data: CreateTestcaseInput) => {
        create.mutate({ ...data, problemId: id });
    };


    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Testcases</h1>

            <TestcaseForm
                onSubmit={handleCreate}
            />

            {testcases && <TestcaseTable data={testcases} />}
        </div>
    );
}
