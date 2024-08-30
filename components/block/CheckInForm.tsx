import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import ProductDetailsForm from "@/components/block/ProductDetailsForm";
import SerialNumberForm from "@/components/block/SerialNumberForm";
import DescriptionForm from "@/components/block/DescriptionForm";

interface Product {
    id: string;
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {}

const handleSubmit = (e: FormEvent, products: Product[]): void => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const adminName = formData.get("admin-id") as string;
    const createdAt = Date.now();
    const description = formData.get("description") as string;

    const productsData = products.map((product) => {
        return {
            productId: product.id,
            productName: formData.get(`product-name-${product.id}`) as string,
            productQty: formData.get(`product-qty-${product.id}`) as string,
            storeName: formData.get(`store-${product.id}`) as string,
            reason: formData.get(`reason-${product.id}`) as string,
            usage: formData.get(`usage-${product.id}`) as string,
        };
    });

    const finalData = {
        adminName,
        createdAt,
        products: productsData,
        description: description,
    };

    console.log(finalData);
    toast.success("Form submitted successfully!");
};

export default function CheckInForm(): JSX.Element {
    const [products, setProducts] = useState<Product[]>([
        { id: crypto.randomUUID() },
    ]);

    const addProduct = (): void => {
        setProducts([...products, { id: crypto.randomUUID() }]);
    };

    const deleteProduct = (id: string): void => {
        if (products.length === 1) {
            toast.error("You must have at least one product");
            return;
        }
        setProducts(products.filter((product) => product.id !== id));
        toast.success("Product Deleted");
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e, products)}
            className={`grid gap-4 lg:grid-cols-[auto,_1fr]`}
        >
            <div
                className={`grid gap-4 rounded-lg border py-4 lg:min-w-[650px]`}
            >
                <ScrollArea
                    type={`always`}
                    className={`h-[min(50svh,_600px)] pl-4`}
                >
                    <div className={`grid items-start gap-6 pr-4 md:pr-6`}>
                        <Card className={`p-4`}>
                            <div className="grid gap-2">
                                <Label htmlFor="admin-id">Admin Name</Label>
                                <Input
                                    required
                                    type="text"
                                    id="admin-id"
                                    name="admin-id"
                                    placeholder="John Doe"
                                />
                            </div>
                        </Card>
                        <div className={`grid gap-2`}>
                            <div>
                                <h2 className={`text-xl font-semibold`}>
                                    Products
                                </h2>
                                <span className="text-sm text-muted-foreground">
                                    list of products to be checked in
                                </span>
                            </div>
                            <div className={`grid gap-4 overflow-hidden`}>
                                {products.map((product) => (
                                    <ProductDetailsForm
                                        key={product.id}
                                        id={product.id}
                                        onDelete={deleteProduct}
                                    />
                                ))}
                            </div>
                        </div>
                        <Button
                            className={`font-bold`}
                            variant={`callToAction`}
                            onClick={addProduct}
                            type="button"
                        >
                            <PlusCircle className={`mr-2 h-4 w-4`} />
                            Add New Product
                        </Button>
                        <Separator />
                        <DescriptionForm />
                    </div>
                </ScrollArea>
                <Separator />
                <div className={`flex gap-4 px-4`}>
                    <Button
                        className={`font-[500]`}
                        variant={`success`}
                        type="submit"
                    >
                        Submit Check In
                    </Button>
                    <Button className={`font-[500]`} variant={`secondary`}>
                        Close
                    </Button>
                </div>
            </div>
            <SerialNumberForm />
        </form>
    );
}
