import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import Providers from "next-auth/providers"
import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma";

export const authOptions : NextAuthOptions = {
  adapter : PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "d1c6fb5219f9029eab0a",
      // clientSecret: "d5eb18630b76eba8c27f07b6601c1128bc034736",
      clientSecret: "9b384d124d922ea4ca24d768af25c1db34d27343"
    }),
    FacebookProvider({
      clientId: '817413449989248',
      clientSecret: 'e912790a1003061c41fb693f6a230c52'
    }),
    
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "J Smith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  
}
export default NextAuth(authOptions)