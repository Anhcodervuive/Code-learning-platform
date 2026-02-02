"use client";

import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Checkbox } from "~/components/ui/checkbox";
import { createTestcaseInUISchema, type CreateTestcaseInput } from "~/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export function TestcaseForm({ onSubmit }: { onSubmit: (data: CreateTestcaseInput) => void }) {
    const form = useForm({
        resolver: zodResolver(createTestcaseInUISchema),
        defaultValues: {
            isHidden: false
        },
    });

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 max-w-xl"
        >
            <Textarea placeholder="Input" {...form.register("input")} />
            <Textarea placeholder="Expected output" {...form.register("expected")} />

            <div className="flex items-center gap-2">
                <Checkbox {...form.register("isHidden")} />
                <span>Hidden test</span>
            </div>

            <Button type="submit" disabled={!form.formState.isValid || form.formState.isSubmitting}>Add Testcase</Button>
        </form>
    );
}
