import { Badge } from "~/components/ui/badge";

export function StatusBadge({ status }: { status: string }) {
    const variant =
        status === "PUBLISHED"
            ? "default"
            : status === "DRAFT"
                ? "secondary"
                : "destructive";

    return <Badge variant={variant}>{status}</Badge>;
}
