import React, { useState } from "react";
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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useFormContext } from "@/context/FormSchema";

interface CheckInFormProps {
    onClose: () => void;
}

export default function CheckInForm({ onClose }: CheckInFormProps) {
    const [products, setProducts] = useState<{ [key: string]: any }>({
        [crypto.randomUUID()]: {},
    });
    const { form, onSubmit } = useFormContext();

    const [selectedProductId, setSelectedProductId] = useState<string | null>(
        null,
    );
    const [isProductFormDisabled, setIsProductFormDisabled] = useState(false);
    const [isAlertOpen, setAlertOpen] = useState(false);

    const addProduct = (): void => {
        const newProductId = crypto.randomUUID();
        setProducts((prevProducts) => ({
            ...prevProducts,
            [newProductId]: {},
        }));
        toast.success("Product Added");
    };

    const deleteProduct = (id: string): void => {
        if (Object.keys(products).length === 1) {
            toast.error("You must have at least one product");
            return;
        }

        const updatedProducts = { ...products };
        delete updatedProducts[id];
        setProducts(updatedProducts);
        toast.warning("Product Deleted");
    };

    const handleAddSerialNumbers = (productId: string) => {
        const productQty = form.getValues(`products.${productId}.productQty`);
        if (productQty && productQty > 0) {
            setSelectedProductId(productId);
            setIsProductFormDisabled(true);
        } else {
            toast.error("Please enter a valid product quantity.");
        }
    };

    const handleSerialNumberSave = (serialNumbers: string[]) => {
        if (selectedProductId) {
            form.setValue(
                `products.${selectedProductId}.serialNumbers`,
                serialNumbers,
            );

            setSelectedProductId(null);
            setIsProductFormDisabled(false);
            toast.success("Serial Numbers Saved");
        }
    };

    const handleCancelSerialNumberForm = () => {
        setIsProductFormDisabled(false);
        setSelectedProductId(null);
    };

    const handleError = (errors: any) => {
        console.error(errors);
        toast.error("Please fix the errors before submitting.");
    };

    return (
        <Form {...form}>
            <form
                className="grid gap-4 lg:grid-cols-[auto,_1fr]"
                onSubmit={form.handleSubmit(onSubmit, handleError)}
            >
                <div className="grid gap-4 rounded-lg border py-4 lg:min-w-[650px]">
                    <ScrollArea
                        type="always"
                        className="h-[min(50svh,_600px)] pl-4"
                    >
                        <div className="grid items-start gap-6 pr-4 md:pr-6">
                            <Card className="p-4">
                                <FormField
                                    control={form.control}
                                    name="adminName"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel>Admin Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    id="admin-id"
                                                    placeholder="John Doe"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </Card>
                            <div className="grid gap-2">
                                <div>
                                    <h2 className="text-xl font-semibold">
                                        Products
                                    </h2>
                                    <span className="text-sm text-muted-foreground">
                                        List of products to be checked in
                                    </span>
                                </div>
                                <div className="grid gap-4 overflow-hidden">
                                    {Object.keys(products).map(
                                        (productId: string) => (
                                            <ProductDetailsForm
                                                key={productId}
                                                id={productId}
                                                onDelete={() =>
                                                    deleteProduct(productId)
                                                }
                                                onAddSerialNumbers={() =>
                                                    handleAddSerialNumbers(
                                                        productId,
                                                    )
                                                }
                                                isDisabled={
                                                    isProductFormDisabled
                                                }
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                            <Button
                                className="font-bold"
                                variant="callToAction"
                                onClick={addProduct}
                                type="button"
                                disabled={isProductFormDisabled}
                            >
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add New Product
                            </Button>
                            <Separator />
                            <DescriptionForm />
                        </div>
                    </ScrollArea>
                    <Separator />
                    <div className="flex gap-4 px-4">
                        <Button
                            className="font-[500]"
                            variant="success"
                            type="submit"
                        >
                            Submit Check In
                        </Button>
                        <AlertDialog
                            open={isAlertOpen}
                            onOpenChange={setAlertOpen}
                        >
                            <AlertDialogTrigger asChild>
                                <Button
                                    variant="secondary"
                                    onClick={() => setAlertOpen(true)}
                                >
                                    Close
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Discard Changes?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to close this
                                        dialog? Any unsaved changes will be
                                        lost, and the form will be reset.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel
                                        onClick={() => setAlertOpen(false)}
                                    >
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() => {
                                            setAlertOpen(false);
                                            onClose();
                                        }}
                                    >
                                        Discard Changes
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <SerialNumberForm
                    productQty={
                        selectedProductId
                            ? form.watch(
                                  `products.${selectedProductId}.productQty`,
                              )
                            : 0
                    }
                    productSelected={!!selectedProductId}
                    onSave={handleSerialNumberSave}
                    onCancel={handleCancelSerialNumberForm}
                />
            </form>
        </Form>
    );
}
