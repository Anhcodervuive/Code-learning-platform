import { HydrateClient } from "~/trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Welcome back 👋</h1>
        <p className="">Pick a problem and start coding.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Easy", "Medium", "Hard"].map((d) => (
            <div key={d} className="card p-4">
              <h3 className="font-semibold">{d} Problems</h3>
              <p className="text-sm">Mock stats here</p>
            </div>
          ))}
        </div>
      </div>
    </HydrateClient>
  );
}
