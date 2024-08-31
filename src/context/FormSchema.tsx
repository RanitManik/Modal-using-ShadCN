"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { z } from "zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const ProductSchema = z.object({
    productName: z.string({ required_error: "Product name is required" }),
    productQty: z
        .number({ required_error: "Product Quantity is required" })
        .min(1, {
            message: "Product quantity must be greater than 0",
        })
        .max(100, {
            message: "Product quantity must be lesser than 100",
        }),
    storeName: z.string({ required_error: "Store name is required" }),
    reason: z.string({ required_error: "Reason is required" }),
    usage: z.string({ required_error: "Usage is required" }).max(100, {
        message: "Usage must be lesser than 100 characters",
    }),
    serialNumbers: z.array(z.string()).optional(),
});

const CheckInSchema = z.object({
    adminName: z
        .string({ required_error: "Admin name is required" })
        .min(2, {
            message: "Admin name must be at least 2 characters.",
        })
        .max(100, {
            message: "Admin name must be lesser than 100",
        }),
    products: z.record(ProductSchema),
    description: z
        .string({ required_error: "Description is required" })
        .max(2000, {
            message: "Description can have max 2000 characters.",
        }),
});

type FormContextType = {
    form: UseFormReturn<z.infer<typeof CheckInSchema>>;
    onSubmit: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = (): FormContextType => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};

interface FormProviderProps {
    children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps): JSX.Element => {
    const form = useForm<z.infer<typeof CheckInSchema>>({
        resolver: zodResolver(CheckInSchema),
        defaultValues: {
            adminName: undefined,
            products: {},
            description: undefined,
        },
    });

    function onSubmit() {
        const values = form.getValues();
        console.log(values);
        toast.success("Successfully Checked In Products");
    }

    return (
        <FormContext.Provider value={{ form, onSubmit }}>
            {children}
        </FormContext.Provider>
    );
};
