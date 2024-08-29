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

export default function ProductsComboBox({ id }: { id: number }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className={`w-full flex-1`}>
            <Popover modal={true} open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between ring-0 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                        <span
                            className={`max-w-[50vw] overflow-x-hidden text-ellipsis whitespace-nowrap sm:max-w-full`}
                        >
                            {value
                                ? products.find(
                                      (product) => product.value === value,
                                  )?.label
                                : "Select a product"}
                        </span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align={`start`} className="w-auto p-0">
                    <Command>
                        <CommandInput placeholder="Search product..." />
                        <CommandList>
                            <CommandEmpty>No product found.</CommandEmpty>
                            <CommandGroup>
                                {products.map((product) => (
                                    <CommandItem
                                        key={product.value}
                                        value={product.value}
                                        onSelect={(currentValue) => {
                                            setValue(
                                                currentValue === value
                                                    ? ""
                                                    : currentValue,
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === product.value
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
            <input
                tabIndex={-1}
                className={`absolute bottom-0 left-0 h-[1px] w-[1px] -scroll-mt-4 border-0 p-0 opacity-0 focus-visible:border-0 focus-visible:outline-0`}
                required
                value={value}
                name={`product-name-${id}`}
            />
        </div>
    );
}
