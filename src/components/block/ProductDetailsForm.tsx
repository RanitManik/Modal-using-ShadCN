import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import ProductsComboBox from "@/components/block/ProductsComboBox";
import { Separator } from "@/components/ui/separator";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "@/context/FormSchema";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type ProductDetailsFormProps = {
    id: string;
    onDelete: (id: string) => void;
    onAddSerialNumbers: () => void;
    isDisabled: boolean;
};

export default function ProductDetailsForm({
    id,
    onDelete,
    onAddSerialNumbers,
    isDisabled,
}: ProductDetailsFormProps) {
    const { form } = useFormContext();

    return (
        <Card
            className={`grid gap-4 p-4 animate-in fade-in ${isDisabled ? "pointer-events-none opacity-50" : ""}`}
        >
            <div className="relative grid gap-2">
                <ProductsComboBox id={id} disabled={isDisabled} />
            </div>
            <div className="grid items-start gap-4 lg:grid-cols-2">
                <FormField
                    control={form.control}
                    name={`products.${id}.productQty`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Quantity</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter product quantity"
                                    disabled={isDisabled}
                                    {...field}
                                    onChange={(e) =>
                                        field.onChange(e.target.valueAsNumber)
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                                Total Quantity:{" "}
                                <span>
                                    {form.watch(`products.${id}.productQty`) ||
                                        0}
                                </span>
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`products.${id}.storeName`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Store</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select store" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="top floor">
                                            Top Floor
                                        </SelectItem>
                                        <SelectItem value="bottom floor">
                                            Bottom Floor
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="ml-auto">
                <Button
                    type="button"
                    onClick={onAddSerialNumbers}
                    disabled={!form.watch(`products.${id}.productQty`)}
                >
                    Add Serial Numbers
                </Button>
            </div>
            <Separator />
            <div className="grid items-start gap-4 lg:grid-cols-2">
                <FormField
                    control={form.control}
                    name={`products.${id}.usage`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Usage</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Where you want to use it"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`products.${id}.reason`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Reason</FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Reason" />
                                    </SelectTrigger>
                                </FormControl>

                                <SelectContent>
                                    <SelectItem value="servicing">
                                        Servicing
                                    </SelectItem>
                                    <SelectItem value="job-work">
                                        Job work
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="ml-auto">
                <Button
                    aria-label="delete"
                    variant="destructive"
                    type="button"
                    onClick={() => onDelete(id)}
                    disabled={isDisabled}
                >
                    <Trash className="mr-2 h-4 w-4" />
                    Remove Product
                </Button>
            </div>
        </Card>
    );
}
