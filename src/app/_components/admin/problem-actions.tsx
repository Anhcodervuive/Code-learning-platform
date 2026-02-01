"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function ProblemActions({ problemId }: { problemId: string }) {
    return (
        <div className="flex justify-end gap-2">
            <Button size="sm" variant="ghost" asChild>
                <Link href={`/admin/problems/${problemId}`}>Edit</Link>
            </Button>

            <Button size="sm" variant="ghost" asChild>
                <Link href={`/admin/problems/${problemId}/testcases`}>
                    Testcases
                </Link>
            </Button>
        </div>
    );
}
