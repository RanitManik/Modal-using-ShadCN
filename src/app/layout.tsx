import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { FormProvider } from "@/context/FormSchema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Modal using ShadCN",
    description: "Frontend Developer Assignment: Creating a Modal using ShadCN",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <FormProvider>{children}</FormProvider>
            </body>
            <Toaster richColors />
        </html>
    );
}