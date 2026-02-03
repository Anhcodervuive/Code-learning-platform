

export default function AdminLayout({ children, sidebar }: { children: React.ReactNode, sidebar: React.ReactNode }) {
    return (
        <div className="flex min-h-screen admin">
            {sidebar}
            <main className="flex-1 p-6 bg-muted/40">
                {children}
            </main>
        </div>
    );
}
