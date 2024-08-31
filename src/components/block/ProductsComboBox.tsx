import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "@/context/FormSchema";

const products = [
    {
        value: "ultraplus-in-built-battery-milk-analyzer",
        label: "Ultraplus in built battery | milk analyzer",
    },
    {
        value: "ultraplus-milk-analyzer-regular-industrial",
        label: "Ultraplus milk analyzer regular, for industrial use",
    },
    {
        value: "ultrasonic-milk-analyzer",
        label: "Ultrasonic milk analyzer",
    },
    {
        value: "ultrasonic-milk-analyzer-set",
        label: "Ultrasonic milk analyzer set",
    },
    {
        value: "v-bond-milk-analyzer",
        label: "V bond milk analyzer",
    },
    {
        value: "v-bond-mini-in-built-battery-milk-analyzer",
        label: "V bond mini - in built battery | milk analyzer",
    },
    {
        value: "vitco-printer",
        label: "Vitco - printer",
    },
    {
        value: "vitco-shagun-data-processing-unit",
        label: "Vitco - shagun data processing unit (DPU)",
    },
    {
        value: "vitco-bond-in-built-battery-gprs-gsm-milk-analyzer",
        label: "Vitco bond - in built battery with GPRS/GSM | milk analyzer",
    },
    {
        value: "vitco-bond-in-built-battery-milk-analyzer",
        label: "Vitco bond - in built battery | milk analyzer",
    },
    {
        value: "vitco-milk-ultrasonic-processor",
        label: "Vitco milk ultrasonic processor",
    },
    {
        value: "vitco-mini-v-bond-regular",
        label: "Vitco mini v bond regular",
    },
];

export default function ProductsComboBox({
    id,
    disabled,
}: {
    id: string;
    disabled: boolean;
}) {
    const [open, setOpen] = useState(false);

    const { form } = useFormContext();

    return (
        <div className={`w-full flex-1`}>
            <FormField
                disabled={disabled}
                control={form.control}
                name={`products.${id}.productName`}
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Product Name</FormLabel>
                        <Popover
                            modal={true}
                            open={open}
                            onOpenChange={setOpen}
                        >
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className={cn(
                                            "w-full justify-between ring-0 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                                            !field.value &&
                                                "text-muted-foreground",
                                        )}
                                    >
                                        {field.value
                                            ? products.find(
                                                  (product) =>
                                                      product.value ===
                                                      field.value,
                                              )?.label
                                            : "Select a Product"}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                                align="start"
                                className="w-auto p-0"
                            >
                                <Command>
                                    <CommandInput placeholder="Search Product..." />
                                    <CommandList>
                                        <CommandEmpty>
                                            No Products found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {products.map((product) => (
                                                <CommandItem
                                                    value={product.label}
                                                    key={product.value}
                                                    onSelect={() => {
                                                        form.clearErrors(
                                                            `products.${id}.productName`,
                                                        );
                                                        form.setValue(
                                                            `products.${id}.productName`,
                                                            product.value,
                                                        );
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            product.value ===
                                                                field.value
                                                                ? "opacity-100"
                                                                : "opacity-0",
                                                        )}
                                                    />
                                                    {product.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        <FormDescription>
                            Warehouse Stock: <span>{0}</span>
                        </FormDescription>
                    </FormItem>
                )}
            />
        </div>
    );
}
