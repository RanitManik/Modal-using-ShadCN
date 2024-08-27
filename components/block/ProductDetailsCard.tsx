import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import ProductsComboBox from "@/components/block/ProductsComboBox";
import SerialNumber from "@/components/block/SerialNumber";

export default function ProductDetailsCard() {
    return (
        <Card
            className={`grid gap-4 p-4 duration-200 animate-in fade-in slide-in-from-top`}
        >
            <div className={`grid gap-2`}>
                <Label>Product Name</Label>
                <div className={`flex flex-col gap-4 md:flex-row`}>
                    <ProductsComboBox />
                    <Button variant={`destructive`}>
                        <Trash className={`mr-2 h-4 w-4`} />
                        Delete
                    </Button>
                </div>
            </div>
            <div className={`grid items-end gap-4 md:grid-cols-2`}>
                <div className={`grid gap-2`}>
                    <Label htmlFor={`product-qty`}>Product Quantity</Label>
                    <Input
                        required
                        type="number"
                        id="product-qty"
                        placeholder="Enter product quantity"
                    />
                </div>
                <div>
                    <Label>Store</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select store" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Stores</SelectLabel>
                                <SelectItem value="tf">Top Floor</SelectItem>
                                <SelectItem value="bf">Bottom Floor</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <SerialNumber />
            </div>
        </Card>
    );
}
