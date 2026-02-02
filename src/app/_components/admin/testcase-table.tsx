"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";
import type { TestCase } from "generated/prisma";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Trash2 } from "lucide-react";

export function TestcaseTable({ data, problemId }: { data: TestCase[], problemId: string }) {
    const util = api.useUtils()
    const deleteMutation = api.testcase.delete.useMutation({
        onSuccess: async () => {
            await util.testcase.listByProblem.invalidate(problemId)
        }
    });

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Input</TableHead>
                    <TableHead>Expected</TableHead>
                    <TableHead>Hidden</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((t) => (
                    <TableRow key={t.id}>
                        <TableCell className="font-mono text-xs">
                            {t.input}
                        </TableCell>
                        <TableCell className="font-mono text-xs">
                            {t.expected}
                        </TableCell>
                        <TableCell>
                            {t.isHidden ? (
                                <Badge variant="secondary">Hidden</Badge>
                            ) : (
                                <Badge>Public</Badge>
                            )}
                        </TableCell>
                        <TableCell className="text-right">
                            <Button variant="destructive" onClick={() => deleteMutation.mutate(t.id)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
