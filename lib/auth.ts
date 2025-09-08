import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { customSession } from "better-auth/plugins";

import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  socialProviders: {
    google: {
      prompt: "select_account consent",
      accessType: "offline",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      scopes: ["email", "public_profile"],
    },
  },
  account: {
    modelName: "account",
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
      allowDifferentEmails: false,
    },
  },
  rateLimit: {
    enabled: true,
    maxRequests: 10,
    window: 60,
  },
  plugins: [
    customSession(async ({ user, session }) => {
      const account = await prisma.account.findFirst({
        where: { userId: user.id },
        select: { providerId: true },
      });
      return {
        ...session,
        user: {
          ...user,
          provider: account?.providerId ?? null,
        },
      };
    }),
  ],
});
