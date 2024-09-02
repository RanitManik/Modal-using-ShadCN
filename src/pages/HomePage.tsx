"use client";

import Modal from "@/components/block/Modal";
import { ModeToggle } from "@/components/block/ModeToggle";
import Link from "next/link";
import { Github } from "lucide-react";
import Image from "next/image";

function HomePage() {
    return (
        <div
            className={`grid min-h-svh place-content-center gap-6 duration-500 animate-in fade-in`}
        >
            <header
                className={`fixed flex w-full items-center justify-between p-4`}
            >
                <p>Modal using shadcn</p>
                <div className="flex items-center gap-6">
                    <Link
                        target="_blank"
                        className={`grid h-10 w-10 place-items-center rounded border border-input text-secondary-foreground hover:bg-secondary/80`}
                        href={`https://github.com/RanitManik/Modal-using-ShadCN`}
                    >
                        <Github className={`h-4 w-4`} />
                        <span className={`sr-only`}>GitHub Link</span>
                    </Link>
                    <ModeToggle />
                </div>
            </header>
            <main className={`mx-auto grid place-items-center text-center`}>
                <Image
                    src={`/technologies-used.svg`}
                    width="600"
                    height="106"
                    alt={`React Next Tailwind TypeScript ShadcnUI ZOD`}
                />
                <h1
                    className={`mb-2 animate-border scroll-m-20 border-transparent bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] bg-clip-text text-[1.5rem] font-bold tracking-tight text-transparent lg:text-[3rem]`}
                >
                    Inventory Management System
                </h1>
                <p className={`mb-8`}>
                    Open Modal by clicking the Button below
                </p>
                <Modal />
            </main>
        </div>
    );
}

export default HomePage;
