import { auth } from "~/server/auth";
import { UserMenu } from "../_components/header/user-menu";
// import ToogleThemeButton from "../_components/header/toogle-theme-button";
import Link from "next/link";


export default async function Header() {
    const session = await auth()
    console.log(session);

    return (
        <header className="border-b border-border bg-background">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <Link href={'/'} className="font-bold text-primary">⚡ CodeLearn</Link>

                <nav className="flex items-center gap-2">
                    <a className="btn-ghost">Problems</a>
                    <a className="btn-ghost">Learn</a>
                    {/* <ToogleThemeButton /> */}
                    <UserMenu user={session?.user} />
                </nav>
            </div>
        </header>
    );
}