"use client";

import { CldUploadWidget, type CloudinaryUploadWidgetResults } from "next-cloudinary";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

type Props = {
    value?: string | null;
    onChange: (url: string) => void;
};

export const AvatarUpload = ({ value, onChange }: Props) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <Avatar className="h-20 w-20">
                <AvatarImage src={value ?? "/avatar-default.png"} />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <CldUploadWidget
                uploadPreset="avatar_upload"
                options={{ maxFiles: 1 }}
                onSuccess={(result: CloudinaryUploadWidgetResults) => {
                    const info = result?.info as { secure_url?: string };
                    if (!info.secure_url) return;
                    onChange(info.secure_url);
                }}
            >
                {({ open }) => (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => open()}
                    >
                        Change avatar
                    </Button>
                )}
            </CldUploadWidget>
        </div>
    );
};
