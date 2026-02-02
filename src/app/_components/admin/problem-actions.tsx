"use client";

import { Info, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export default function ProblemActions({ problemId }: { problemId: string }) {
    const util = api.useUtils()
    const router = useRouter()
    const deleteMutation = api.problem.delete.useMutation({
        onSuccess: async () => {
            await util.problem.invalidate()
            router.refresh()
        }
    });


    return (
        <div className="flex justify-end gap-2">
            <Button asChild variant="outline">
                <Link href={`/admin/problems/${problemId}`}>
                    <Info className="h-4 w-4" />
                </Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
                <Link href={`/admin/problems/${problemId}/edit`} className="">
                    <Pencil className="h-4 w-4" />
                </Link>
            </Button>
            <Button variant="destructive" onClick={() => deleteMutation.mutate(problemId)}>
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
    );
}
