export function AdminHeader({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
    );
}
