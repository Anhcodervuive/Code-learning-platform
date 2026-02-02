"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateProfileSchema, type UpdateProfileInput } from "~/schemas/profile";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { AvatarUpload } from "./avatar-uploader";

export const ProfileForm = ({
    defaultValues,
    onSubmit,
}: {
    defaultValues?: UpdateProfileInput;
    onSubmit: (data: UpdateProfileInput) => void;
}) => {
    const form = useForm<UpdateProfileInput>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues,
    });
    const [avatarUrl] = useWatch({
        control: form.control,
        name: ['avatarUrl']
    })

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 max-w-xl md:w-[30%] flex flex-col justify-center"
        >
            <AvatarUpload
                value={avatarUrl}
                onChange={(url: string) => form.setValue("avatarUrl", url)}
            />
            <Input
                placeholder="Display name"
                {...form.register("displayName")}
            />

            <Textarea
                rows={4}
                placeholder="Bio"
                {...form.register("bio")}
            />

            <Button type="submit">Save profile</Button>
        </form>
    );
};
