import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";

interface SerialNumberFormProps {
    productQty: number;
    productSelected: boolean;
    onSave: (serialNumbers: string[]) => void;
    onCancel: () => void;
}

function SerialNumberForm({
    productQty,
    productSelected,
    onSave,
    onCancel,
}: SerialNumberFormProps) {
    const [serialNumbers, setSerialNumbers] = useState<string[]>([]);

    useEffect(() => {
        if (productSelected) setSerialNumbers(Array(productQty).fill(""));
    }, [productQty, productSelected]);

    const handleSerialNumberChange = (index: number, value: string) => {
        const newSerialNumbers = [...serialNumbers];
        newSerialNumbers[index] = value;
        setSerialNumbers(newSerialNumbers);
    };

    const handleSave = () => {
        onSave(serialNumbers);
        setSerialNumbers([]);
    };

    const handleCancel = () => {
        setSerialNumbers([]);
        onCancel();
    };

    return (
        <div className={`relative grid gap-4 rounded-lg border py-4`}>
            <ScrollArea
                type={`always`}
                className={`h-[min(50svh,_600px)] pl-6 pr-6`}
            >
                <div className="grid items-start gap-4">
                    <Card className="p-4">
                        <CardContent className="grid gap-2 p-0">
                            <h2 className="text-xl font-semibold">
                                Serial Numbers
                            </h2>
                            <span className="mb-2 text-sm text-muted-foreground">
                                Enter the serial numbers for each unit
                            </span>
                            {productSelected ? (
                                <div className="grid gap-4">
                                    {Array.from(
                                        { length: productQty },
                                        (_, index) => (
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder={`Serial Number ${index + 1}`}
                                                value={
                                                    serialNumbers[index] || ""
                                                }
                                                onChange={(e) =>
                                                    handleSerialNumberChange(
                                                        index,
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        ),
                                    )}
                                </div>
                            ) : (
                                <Card className="absolute inset-0 mx-4 grid place-items-center border-dashed p-4 text-center text-sm">
                                    <CardContent>
                                        <Info className="mx-auto mb-2 h-10 w-10 text-gray-500" />
                                        <span className="text-xl font-semibold">
                                            No Product Selected
                                        </span>
                                        <p className="text-muted-foreground">
                                            Select a Product to Add Serial
                                            Numbers
                                        </p>
                                    </CardContent>
                                </Card>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </ScrollArea>
            <Separator />
            <div className="flex gap-4 px-4">
                <Button
                    className="font-[500]"
                    variant="success"
                    type={`button`}
                    onClick={handleSave}
                    disabled={!productSelected}
                >
                    Save Serial Numbers
                </Button>
                <Button
                    className="font-[500]"
                    variant="secondary"
                    type="button"
                    disabled={!productSelected}
                    onClick={handleCancel}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default SerialNumberForm;
