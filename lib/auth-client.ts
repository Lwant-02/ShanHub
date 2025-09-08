import { createAuthClient } from "better-auth/react";
import { customSessionClient } from "better-auth/client/plugins";
import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_AUTH_URL as string,
  plugins: [customSessionClient<typeof auth>()],
});

export const { signIn, signUp, useSession, getSession, signOut } = authClient;
