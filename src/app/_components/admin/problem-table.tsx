"use client";

import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { StatusBadge } from "./status-badge";
import ProblemActions from "./problem-actions";
import type { Problem } from "generated/prisma";

export function ProblemTable({ data }: { data: Problem[] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((p) => (
                    <TableRow key={p.id}>
                        <TableCell>
                            <Link
                                href={`/admin/problems/${p.id}`}
                                className="font-medium hover:underline"
                            >
                                {p.title}
                            </Link>
                        </TableCell>
                        <TableCell>{p.difficulty}</TableCell>
                        <TableCell>
                            <StatusBadge status={p.status} />
                        </TableCell>
                        <TableCell>
                            {new Date(p.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                            <ProblemActions problemId={p.id} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
