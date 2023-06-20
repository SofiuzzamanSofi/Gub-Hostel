"use client"

import { SessionProvider } from "next-auth/react"

type Props = {
    children?: React.ReactNode;
    session?: any; // Add the session property
};

export const NextAuthProviderOwnBuild = ({ children, session }: Props) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
}
