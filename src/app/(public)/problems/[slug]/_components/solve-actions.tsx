"use client";

import { Button } from "~/components/ui/button";

export const SolveActions = ({
    onRun,
    onSubmit,
}: {
    onRun: () => void;
    onSubmit: () => void;
}) => {
    return (
        <div className="flex items-center justify-end gap-2">
            <Button variant="outline" onClick={onRun}>
                Run
            </Button>

            <Button onClick={onSubmit}>
                Submit
            </Button>
        </div>
    );
};
