import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOption : NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    scope: "openid email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
                }
            }
        }),
    ],

    callbacks: {
    async signIn({ user, account, profile }) {
      // Optional: log emails to console
      console.log("New sign-in from:", user.email);
      return true;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account }) {
      return token;
    },
  },
  // Enable this if using a database (see below)
  // adapter: YourAdapter,
}