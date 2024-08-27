import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProductDetailsCard from "@/components/block/ProductDetailsCard";
import Message from "@/components/block/Message";
import { PlusCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export default function CheckInForm() {
    const [products, setProducts] = useState([<ProductDetailsCard key={0} />]);

    const addProduct = () => {
        setProducts([
            <ProductDetailsCard key={products.length} />,
            ...products,
        ]);
        toast.success("New Product Created");
    };

    return (
        <form className={`grid gap-4`}>
            <ScrollArea type={`always`} className={`h-[min(50svh,_600px)]`}>
                <div className={`grid items-start gap-6 pr-4 md:pr-6`}>
                    <Card className={`p-4`}>
                        <div className="grid gap-2">
                            <Label htmlFor="admin-id">Admin Name</Label>
                            <Input
                                required
                                type="text"
                                id="admin-id"
                                placeholder="John Doe"
                            />
                        </div>
                    </Card>
                    <div className={`grid gap-2`}>
                        <div
                            className={`flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left`}
                        >
                            <div>
                                <h2 className={`text-xl font-semibold`}>
                                    Products
                                </h2>
                                <span className="text-sm text-muted-foreground">
                                    list of products to be checked in
                                </span>
                            </div>
                            <Button
                                className={`font-bold`}
                                variant={`create`}
                                onClick={addProduct}
                                type="button"
                            >
                                <PlusCircle className={`mr-2 h-4 w-4`} />
                                Add New Product
                            </Button>
                        </div>
                        <div className={`grid gap-4 overflow-hidden`}>
                            {products}
                        </div>
                    </div>
                    <Message />
                </div>
            </ScrollArea>
            <Separator />
            <Button
                className={`w-full text-base font-bold`}
                variant={`success`}
                type="submit"
            >
                Check In
            </Button>
        </form>
    );
}
