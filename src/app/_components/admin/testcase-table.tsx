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

export function TestcaseTable({ data }: { data: TestCase[] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Input</TableHead>
                    <TableHead>Expected</TableHead>
                    <TableHead>Hidden</TableHead>
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
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
