// lib/authOptions.js
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./mongoose";
import User from "../models/User";

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // Update session daily
  },
  pages: {
    signIn: "/",
    error: "/",
  },
  providers: [
    CredentialsProvider({

      async authorize(credentials) {
        try {

          await dbConnect();

          const user = await User.findOne({ email: credentials.email }).lean();


          console.log(
            "User found:",
            user ? { ...user, password: "***" } : null
          );

          if (!user) {
            console.log("User not found:", credentials.email);
            return null;
          }

          const userData = {
            id: user._id.toString(),
            name: user.username,
            email: user.email,
          };

          console.log("Returning user data:", userData);
          return userData;

        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  events: {
    async signIn({ user }) {
      console.log("User signed in:", user.email);
    },
    async signOut() {
      console.log("User signed out");
    },
    async session({ session }) {
      // Force session update
      return session;
    },
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {

      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
        };
      }

      // Session update: merge new session data
      if (trigger === "update" && session?.user) {
        return {
          ...token,
          ...session.user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
