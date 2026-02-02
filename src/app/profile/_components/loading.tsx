import { Skeleton } from "~/components/ui/skeleton";

export const ProfileLoading = () => {
    return (
        <div className="space-y-6 max-w-xl">
            <Skeleton className="h-8 w-40" />

            <div className="flex items-center gap-4">
                <Skeleton className="h-20 w-20 rounded-full" />
                <Skeleton className="h-9 w-32" />
            </div>

            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-28" />
        </div>
    );
};
