import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function DescriptionForm() {
    return (
        <div className={`grid gap-2`}>
            <Label htmlFor="description">Description</Label>
            <div>
                <Textarea
                    name={`description`}
                    id="description"
                    required
                    rows={3}
                    placeholder="Type your Description here."
                />
            </div>
        </div>
    );
}

export default DescriptionForm;
