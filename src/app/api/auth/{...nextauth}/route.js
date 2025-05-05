import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";

export const authOptions = {
  provider: [
    CredentialsProvider({
      name: "login username/password",
      credentials: {
        email: { label: "email", type: "email" },
        placeholder: "email",
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        try {
          // ค้นหา user จาก api login
          const user = {
            id: 1,
            email: "m@example.com",
            password: "1234",
            fullname: "mike",
            role: "customer",
          };

          return user;
        } catch (error) {
          console.log(error);

          return null;
        }
      },
    }),
  ],
  callback: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30, // 30 วัน
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
