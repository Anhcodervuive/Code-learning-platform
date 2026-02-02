import { createTRPCRouter, protectedProcedure } from "../trpc";
import { updateProfileSchema } from "~/schemas/profile";

export const profileRouter = createTRPCRouter({
    me: protectedProcedure.query(({ ctx }) => {
        return ctx.db.userProfile.findUnique({
            where: { userId: ctx.session.user.id },
        });
    }),

    update: protectedProcedure
        .input(updateProfileSchema)
        .mutation(({ ctx, input }) => {
            return ctx.db.userProfile.update({
                where: { userId: ctx.session.user.id },
                data: input,
            });
        }),
});
