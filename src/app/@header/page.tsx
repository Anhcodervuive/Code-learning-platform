import { auth } from "~/server/auth";
import Link from "next/link";
import { UserMenu } from "../_components/header/user-menu";
import { NavItem } from "../_components/header/nav-link";

const Header = async () => {
    const session = await auth();

    return (
        <header className="border-b border-border bg-background">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">

                {/* Left */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-tight text-primary"
                    >
                        ⚡ CodeLearn
                    </Link>

                    <nav className="flex items-center gap-1">
                        <NavItem href="/problems" label="Problems" />
                        <NavItem href="/learn" label="Learn" />
                    </nav>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <UserMenu user={session?.user} />
                </div>
            </div>
        </header>
    );
};

export default Header;
