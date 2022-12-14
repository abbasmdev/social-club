import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";


export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth",
    signOut: "/auth"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt({ token, user }) {

      token.userId = user?.id
      return token
    },

    session({ session, token }) {


      if (session.user && token.userId) {
        session.user.id = token.userId;
      }
      return session;
    },
  },


  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
