import Image from "next/image";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav"
import React from "react";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={[]}  />
            <div className="flew size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={55} height={55} alt="logo" />
                </div>
                    <MobileNav user={[]} />
                {children}
            </div>
        </main>
    );
}