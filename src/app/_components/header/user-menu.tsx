"use client";
import type { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
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
                <button className="rounded-full outline-none">
                    <Avatar className="h-9 w-9">
                        <AvatarImage
                            src={user.image ?? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2'}
                            alt="User profile"
                        />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem><Link href={'/profile'}>Profile</Link></DropdownMenuItem>
                {user.role === 'ADMIN' && <DropdownMenuItem><Link href={'/admin/problems'}>Admin dashboard</Link></DropdownMenuItem>}
                <DropdownMenuItem className="text-destructive" onClick={handleSignout}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}