'use client'

import { api } from "~/trpc/react";
import { ProfileForm } from "./_components/profile-form";
import type { UpdateProfileInput } from "~/schemas/profile";
import { useRouter } from "next/navigation";
import { ProfileLoading } from "./_components/loading";

export const dynamic = "force-dynamic";

const ProfilePage = () => {
    const util = api.useUtils()
    const router = useRouter()
    const { data: profile, isLoading } = api.profile.me.useQuery();
    const updateMutation = api.profile.update.useMutation({
        onSuccess: async () => {
            await util.profile.me.invalidate();
            router.refresh();
        }
    });


    const handleUpdate = (data: UpdateProfileInput) => {
        updateMutation.mutate(data);
    }

    if (isLoading) {
        return (
            <div className="flex justify-between w-full">
                <ProfileLoading />
            </div>
        );
    }

    console.log(profile);

    return (
        <div className="space-y-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold">My profile</h1>

            {profile && <ProfileForm
                defaultValues={{
                    displayName: profile?.displayName,
                    bio: profile?.bio,
                    avatarUrl: profile?.avatarUrl
                }}
                onSubmit={handleUpdate}
            />}
        </div>
    );
};

export default ProfilePage;
