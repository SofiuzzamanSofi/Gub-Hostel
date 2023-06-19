import { compare } from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'



import { connectToMongoDB } from 'lib/mongodb'
import User from 'models/user'
import { UserTypes } from '@/workArea/types/allCommonTypes'

const options: NextAuthOptions = {

    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectToMongoDB().catch(err => { throw new Error(err) })

                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password")

                if (!user) {
                    throw new Error("Invalid credentials")
                }

                const isPasswordCorrect = await compare(credentials!.password, user.password)

                if (!isPasswordCorrect) {
                    throw new Error("Invalid credentials")
                }

                return user
            }
        })
    ],
    pages: {
        signIn: "../../../app/sign-in/page.tsx"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            const user = token.user as UserTypes
            session.user = user

            return session
        }
    }
}

export default NextAuth(options)