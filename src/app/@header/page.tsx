"use client";
import { useTheme } from "next-themes";
import { UserMenu } from "../_components/header/user-menu";


export default function Header() {
    const { theme, setTheme } = useTheme();


    return (
        <header className="border-b border-border bg-background">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <div className="font-bold text-primary">⚡ CodeLearn</div>
                <nav className="flex items-center gap-2">
                    <a className="btn-ghost">Problems</a>
                    <a className="btn-ghost">Learn</a>
                    <a className="btn-ghost">Contest</a>
                    <button
                        onClick={() => {
                            if (theme === "dark") {
                                setTheme("light");
                            } else {
                                setTheme("dark");
                            }
                        }}
                        className="btn-primary"
                    >
                        {theme === "dark" ? "Light" : "Dark"}
                    </button>
                    <UserMenu />
                </nav>
            </div>
        </header>
    );
}