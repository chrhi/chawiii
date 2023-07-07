import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "0c185c2a49cae63abcdb",
      clientSecret: "d5eb18630b76eba8c27f07b6601c1128bc034736",
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)