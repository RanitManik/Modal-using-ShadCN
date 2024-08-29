import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import ProductsComboBox from "@/components/block/ProductsComboBox";
import { Separator } from "@/components/ui/separator";

type ProductDetailsFormProps = {
    id: number;
    onDelete: (id: number) => void;
};

export default function ProductDetailsForm({
    id,
    onDelete,
}: ProductDetailsFormProps) {
    return (
        <Card className={`grid gap-4 p-4 animate-in fade-in`}>
            <div className={`relative grid gap-2`}>
                <Label>Product {id + 1}</Label>
                <div className={`flex flex-col gap-4 lg:flex-row`}>
                    <ProductsComboBox id={id} />
                    <Button
                        aria-label={`delete`}
                        variant={`destructive`}
                        onClick={() => onDelete(id)}
                    >
                        <Trash className={`mr-2 h-4 w-4`} />
                        Delete
                    </Button>
                </div>
            </div>
            <div className={`grid items-end gap-4 lg:grid-cols-2`}>
                <div className={`grid gap-2`}>
                    <Label htmlFor={`product-qty`}>Product Quantity</Label>
                    <Input
                        required
                        type="number"
                        id={`product-qty-${id}`}
                        name={`product-qty-${id}`}
                        placeholder="Enter product quantity"
                    />
                </div>
                <div className={`relative`}>
                    <Label>Store</Label>
                    <Select required name={`store-${id}`}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select store" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="top floor">Top Floor</SelectItem>
                            <SelectItem value="bottom floor">
                                Bottom Floor
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className={`flex items-center justify-between gap-4`}>
                <p className={`text-lg font-semibold`}>
                    Total Quantity: <span>{}</span>
                </p>
                <Button type={`button`} variant={`create`}>
                    Add Serial Numbers
                </Button>
            </div>
            <Separator />
            <div className={`grid grid-cols-2 gap-4`}>
                <div className={`grid gap-2`}>
                    <Label htmlFor={`usage`}>Usage</Label>
                    <Input
                        type="text"
                        id="usage"
                        name="usage"
                        placeholder="Where you want to use it"
                    />
                </div>
                <div className={`relative`}>
                    <Label>Reason</Label>
                    <Select required name={`reason`}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Reason" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="servicing">Servicing</SelectItem>
                            <SelectItem value="job-work">Job work</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </Card>
    );
}
