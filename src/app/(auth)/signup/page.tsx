"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpInput } from "~/schemas/auth";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";


export default function SignUpPage() {
    const router = useRouter()
    const authMutation = api.auth.register.useMutation({
        onSuccess: () => {
            router.push("/signin");
        },
    });

    const form = useForm<signUpInput>({
        resolver: zodResolver(signUpSchema),
    });

    const handleSignup = (values: signUpInput) => {
        authMutation.mutate(values);
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Create account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={form.handleSubmit(handleSignup)}>
                        <Input placeholder="Name" {...form.register("name")} />
                        <Input placeholder="Email" {...form.register("email")} />
                        <Input type="password" placeholder="Password" {...form.register("password")} />
                        <Button className="w-full" disabled={!form.formState.isValid || authMutation.isPending} type="submit">{authMutation.isPending ? "Signing up..." : "Sign up"}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}