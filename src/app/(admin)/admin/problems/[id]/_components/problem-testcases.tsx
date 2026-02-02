import Link from "next/link";
import { Button } from "~/components/ui/button";

type Props = {
    total: number;
    hidden: number;
};

export const ProblemTestcases = ({ total, hidden }: Props) => {
    return (
        <div className="rounded-lg border p-4 space-y-2">
            <h2 className="font-semibold">Testcases</h2>

            <p className="text-sm text-muted-foreground">
                Total: {total} · Hidden: {hidden}
            </p>

            <Button asChild size="sm">
                <Link href="./testcases">Manage testcases</Link>
            </Button>
        </div>
    );
};
