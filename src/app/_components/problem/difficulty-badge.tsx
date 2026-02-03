import { cn } from "~/lib/utils";

const DifficultyBadge = ({
    difficulty,
}: {
    difficulty: "EASY" | "MEDIUM" | "HARD";
}) => {
    return (
        <span
            className={cn(
                "rounded-md px-2 py-0.5 text-xs font-medium",
                difficulty === "EASY" && "bg-green-100 text-green-700",
                difficulty === "MEDIUM" && "bg-yellow-100 text-yellow-700",
                difficulty === "HARD" && "bg-red-100 text-red-700",
            )}
        >
            {difficulty}
        </span>
    );
};

export default DifficultyBadge;