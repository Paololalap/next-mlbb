import bcrypt from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectMongoDB } from "@/lib/db";
import User from "@/models/users";
import { NextApiHandler } from "next";

interface ICredentials {
  username: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { username, password } = credentials as ICredentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ username });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler: NextApiHandler = NextAuth(authOptions);

export { handler as GET, handler as POST };
