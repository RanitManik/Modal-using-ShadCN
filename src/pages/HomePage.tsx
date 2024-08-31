"use client";

import Modal from "@/components/block/Modal";

function HomePage() {
    return (
        <div
            className={`grid min-h-svh place-content-center gap-10 duration-500 animate-in fade-in`}
        >
            <header className={`text-center`}>
                <h1
                    className={`mb-2 animate-border scroll-m-20 border-transparent bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] bg-clip-text text-[2.25rem] font-bold tracking-tight text-transparent lg:text-[3rem]`}
                >
                    Modal Using Shadcn
                </h1>
                <p className={`animate-bounce`}>
                    Open Modal by clicking the Button below
                </p>
            </header>
            <main className={`mx-auto`}>
                <Modal />
            </main>
        </div>
    );
}

export default HomePage;
