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
                <Button className={`font-bold`}>Open Modal</Button>
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
