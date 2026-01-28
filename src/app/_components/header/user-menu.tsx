"use client";
import type { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

type UserMenuProps = {
    user?: { id: string; } & User
};


export function UserMenu({ user }: UserMenuProps) {
    const handleSignout = async () => {
        await signOut();
    }
    if (!user) {
        return (
            <div className="flex gap-2">
                <Button variant="ghost" asChild><Link href="/signin">Sign in</Link></Button>
                <Button asChild><Link href="/signup">Sign up</Link></Button>
            </div>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">{user.name ?? user.email}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive" onClick={handleSignout}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}