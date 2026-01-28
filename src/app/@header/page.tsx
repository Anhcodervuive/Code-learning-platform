import { auth } from "~/server/auth";
import { UserMenu } from "../_components/header/user-menu";


export default async function Header() {
    const session = await auth()
    console.log(session);

    return (
        <header className="border-b border-border bg-background">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <div className="font-bold text-primary">⚡ CodeLearn</div>
                <nav className="flex items-center gap-2">
                    <a className="btn-ghost">Problems</a>
                    <a className="btn-ghost">Learn</a>
                    <a className="btn-ghost">Contest</a>

                    <UserMenu user={session?.user} />
                </nav>
            </div>
        </header>
    );
}