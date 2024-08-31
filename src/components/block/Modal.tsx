"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CheckInForm from "@/components/block/CheckInForm";

export default function Modal() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className={`animate-border bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%]`}
                >
                    Open Modal
                </Button>
            </DialogTrigger>
            <DialogContent
                className="max-h-screen overflow-y-auto lg:max-w-[1100px]"
                onInteractOutside={(e) => e.preventDefault()}
            >
                <DialogHeader className={`mb-2`}>
                    <DialogTitle className="mb-2 border-b pb-2 text-3xl">
                        Check In
                    </DialogTitle>
                    <DialogDescription>
                        Add check-in of products by filling in the details
                        below.
                    </DialogDescription>
                </DialogHeader>
                <CheckInForm onClose={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
