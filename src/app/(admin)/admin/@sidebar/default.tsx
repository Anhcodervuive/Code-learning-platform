"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const items = [
    { label: "Problems", href: "/admin/problems" },
    { label: "Users", href: "/admin/users" },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r bg-background">
            <div className="p-4 font-bold text-lg">Admin</div>

            <nav className="space-y-1 px-2">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "block rounded-md px-3 py-2 text-sm hover:bg-muted",
                            pathname.startsWith(item.href) && "bg-muted font-medium"
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
