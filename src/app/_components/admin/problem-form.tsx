"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { createProblemSchema, type CreateProblemInput } from "~/schemas";
import type { Difficulty, ProblemStatus } from "generated/prisma";

export function ProblemForm({
    defaultValues,
    onSubmit,
}: {
    defaultValues?: Partial<CreateProblemInput>;
    onSubmit: (data: CreateProblemInput) => void;
}) {
    const form = useForm<CreateProblemInput>({
        resolver: zodResolver(createProblemSchema),
        defaultValues,
    });

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 max-w-2xl"
        >
            <Input placeholder="Title" {...form.register("title")} />
            <Input placeholder="Slug" {...form.register("slug")} />

            <Textarea
                rows={8}
                placeholder="Description"
                {...form.register("description")}
            />

            <Select
                onValueChange={(v) => form.setValue("difficulty", v as Difficulty)}
                defaultValue={defaultValues?.difficulty}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="EASY">Easy</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="HARD">Hard</SelectItem>
                </SelectContent>
            </Select>

            <Select
                onValueChange={(v) => form.setValue("status", v as ProblemStatus)}
                defaultValue={defaultValues?.status}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="DRAFT">Draft</SelectItem>
                    <SelectItem value="PUBLISHED">Published</SelectItem>
                </SelectContent>
            </Select>

            <Button type="submit" disabled={!form.formState.isValid || form.formState.isSubmitting}>Save</Button>
        </form>
    );
}
