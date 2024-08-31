import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "@/context/FormSchema";

function DescriptionForm() {
    const { form } = useFormContext();
    return (
        <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <FormControl>
                        <Textarea
                            id="description"
                            rows={3}
                            placeholder="Type your description here."
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default DescriptionForm;
