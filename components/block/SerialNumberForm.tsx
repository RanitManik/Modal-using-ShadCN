import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function SerialNumberForm() {
    return (
        <div className={`grid gap-4 rounded-lg border py-4`}>
            <ScrollArea
                type={`always`}
                className={`h-[min(50svh,_600px)] pl-6 pr-6`}
            >
                <h2
                    className={`pb-3 text-2xl font-semibold leading-none tracking-tight`}
                >
                    Serial Numbers
                </h2>
                <div className={`grid gap-4`}>
                    <Input
                        id={`serial-number`}
                        type="text"
                        placeholder={`Enter Serial Number Here`}
                    />
                </div>
            </ScrollArea>
            <Separator />
            <div className={`flex gap-4 px-4`}>
                <Button
                    className={`text-base font-[500]`}
                    variant={`success`}
                    type="submit"
                >
                    Save Serial Numbers
                </Button>
                <Button
                    className={`text-base font-[500]`}
                    variant={`destructive`}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default SerialNumberForm;
