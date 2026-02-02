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
import { Separator } from "~/components/ui/separator";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "~/components/ui/collapsible";

import { createProblemSchema, type CreateProblemInput } from "~/schemas";
import type { Difficulty, ProblemStatus } from "generated/prisma";
import { MarkdownEditor } from "../editor/markdown-editor";
import { ChevronDown } from "lucide-react";

export function ProblemForm({
    defaultValues,
    onSubmit,
}: {
    defaultValues?: Partial<CreateProblemInput>;
    onSubmit: (data: CreateProblemInput) => void;
}) {
    const form = useForm<CreateProblemInput>({
        resolver: zodResolver(createProblemSchema),
        defaultValues: {
            timeLimitMs: 1000,
            memoryLimitMb: 256,
            ...defaultValues,
        },
    });

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl"
        >
            {/* ================= Basic Info ================= */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Basic information</h2>

                <div className="space-y-1">
                    <label className="text-sm font-medium">Title</label>
                    <Input placeholder="Two Sum" {...form.register("title")} />
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium">Slug</label>
                    <Input placeholder="two-sum" {...form.register("slug")} />
                    <p className="text-xs text-muted-foreground">
                        Used in URL. Must be unique.
                    </p>
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium">Description</label>

                    <MarkdownEditor
                        value={form.watch("description")}
                        onChange={(v) => form.setValue("description", v)}
                        height={300}
                        placeholder="Write problem description (Markdown supported)"
                    />

                    <p className="text-xs text-muted-foreground">
                        Supports headings, lists, code blocks.
                    </p>
                </div>
            </section>

            <Separator />

            {/* ================= Metadata ================= */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Metadata</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium">Difficulty</label>
                        <Select
                            onValueChange={(v) =>
                                form.setValue("difficulty", v as Difficulty)
                            }
                            defaultValue={defaultValues?.difficulty}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="EASY">Easy</SelectItem>
                                <SelectItem value="MEDIUM">Medium</SelectItem>
                                <SelectItem value="HARD">Hard</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium">Status</label>
                        <Select
                            onValueChange={(v) =>
                                form.setValue("status", v as ProblemStatus)
                            }
                            defaultValue={defaultValues?.status}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="DRAFT">Draft</SelectItem>
                                <SelectItem value="PUBLISHED">Published</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            <Separator />

            {/* ================= Judge Config ================= */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Judge configuration</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium">Time limit (ms)</label>
                        <Input type="number" {...form.register("timeLimitMs")} />
                        <p className="text-xs text-muted-foreground">
                            Maximum execution time per test case.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium">Memory limit (MB)</label>
                        <Input type="number" {...form.register("memoryLimitMb")} />
                        <p className="text-xs text-muted-foreground">
                            Maximum memory usage allowed.
                        </p>
                    </div>
                </div>
            </section>

            <Separator />

            {/* ================= Learning Content ================= */}
            <Collapsible>
                <CollapsibleTrigger asChild>
                    <button
                        type="button"
                        className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground"
                    >
                        <div className="flex justify-between items-center">Learning content (optional) <ChevronDown /></div>
                    </button>
                </CollapsibleTrigger>

                <CollapsibleContent className="space-y-4 mt-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium">Hint</label>
                        <Textarea
                            placeholder="Small hint to guide students..."
                            {...form.register("hint")}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium">Editorial</label>

                        <MarkdownEditor
                            value={form.watch("editorial") ?? ''}
                            onChange={(v) => form.setValue("editorial", v)}
                            height={350}
                            placeholder="Full solution / explanation"
                        />
                    </div>

                </CollapsibleContent>
            </Collapsible>

            {/* ================= Actions ================= */}
            <div className="pt-4">
                <Button
                    type="submit"
                    disabled={
                        !form.formState.isValid || form.formState.isSubmitting
                    }
                >
                    Save problem
                </Button>
            </div>
        </form>
    );
}
