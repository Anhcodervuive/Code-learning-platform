import Link from "next/link";
import { Button } from "~/components/ui/button";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <div className="space-y-6">
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
          <div className="max-w-3xl text-center space-y-10">
            {/* Hero */}
            <section className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Practice coding. Learn the right way.
              </h1>

              <p className="text-lg text-muted-foreground">
                CodeLearn helps you practice programming problems and
                understand solutions step by step.
              </p>
            </section>

            {/* Actions */}
            <section className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/problems">
                  Browse Problems
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="/register">
                  Sign up to Learn
                </Link>
              </Button>
            </section>

            {/* How it works */}
            <section className="pt-10 space-y-6">
              <h2 className="text-xl font-semibold">
                How CodeLearn works
              </h2>

              <div className="grid gap-4 sm:grid-cols-3 text-sm">
                <div className="rounded-lg border p-4">
                  <p className="font-medium">1. Browse problems</p>
                  <p className="text-muted-foreground">
                    Explore coding problems freely without an account.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <p className="font-medium">2. Create an account</p>
                  <p className="text-muted-foreground">
                    Sign up to unlock learning content and explanations.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <p className="font-medium">3. Learn & improve</p>
                  <p className="text-muted-foreground">
                    Read editorials, hints, and track your progress.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </HydrateClient>
  );
}
