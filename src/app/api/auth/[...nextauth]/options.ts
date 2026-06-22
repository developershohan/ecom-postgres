import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import { compare } from "bcrypt-ts-edge";
import type { NextAuthOptions } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "[EMAIL_ADDRESS]",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        // const user = {
        //   id: 123,
        //   email: "dev.shohanur@gmail.com",
        //   password: "dev.shohanur@gmail.com",
        // };
        // if (
        //   credentials?.email === user?.email &&
        //   credentials?.password === user.password
        // ) {
        //   return user;
        // }
        // const user = await db.user.findUnique({
        //     where: { email: credentials?.email },
        // })
        // if (credentials?.email === user?.email && (await bcrypt.compare(credentials?.password, user.password))) {
        //     return user
        // }

        if (credentials == null) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        if (user && user.password) {
          const isPasswordValid = await compare(
            credentials.password as string,
            user.password as string,
          );

          if (!isPasswordValid) return null;

          return {
            id: user.id,
            email: user.email,
            password: user.password,
            role: user.role,
          };
        }

        return null;
      },
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async session({ session, token, user, trigger }: any) {
      session.user.id = token.sub;
      if (trigger === "update") {
        session.user.name = user.name;
      }
      return session;
    },
  },
} as NextAuthOptions;
