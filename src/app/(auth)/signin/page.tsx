"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type signInInput } from "~/schemas/auth";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { signIn } from "next-auth/react";


export default function SignInPage() {
    const form = useForm<signInInput>({
        resolver: zodResolver(signInSchema),
    });

    const handleSignin = async (values: signInInput) => {
        await signIn("credentials", {
            email: values.email,
            password: values.password,
        })
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={form.handleSubmit(handleSignin)}>
                        <Input placeholder="Email" {...form.register("email")} />
                        <Input type="password" placeholder="Password" {...form.register("password")} />
                        <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}