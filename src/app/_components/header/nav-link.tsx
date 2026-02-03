"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

type Props = {
    href: string;
    label: string;
};

export const NavItem = ({ href, label }: Props) => {
    const pathname = usePathname();
    const active = pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={cn(
                "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                "text-muted-foreground hover:text-foreground hover:bg-muted",
                "text-md",
                active && "text-foreground bg-muted"
            )}
        >
            {label}
        </Link>
    );
};
