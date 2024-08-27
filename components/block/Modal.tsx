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
    const [open, setOpen] = useState(true);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Open Modal</Button>
            </DialogTrigger>
            <DialogContent
                className="max-w-full animate-in fade-in md:max-w-[700px]"
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
                <CheckInForm />
            </DialogContent>
        </Dialog>
    );
}
