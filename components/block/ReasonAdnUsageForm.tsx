import React from "react";
import { Label } from "@/components/ui/label";
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
import { Card } from "@/components/ui/card";

function ReasonAdnUsageForm() {
    return (
        <Card className={`grid items-end gap-4 p-4 md:grid-cols-2`}>
            <div className={`grid gap-2`}>
                <Label htmlFor={`usage`}>Usage</Label>
                <Input
                    type="text"
                    id="usage"
                    placeholder="Where you want to use it"
                />
            </div>
            <div>
                <Label>Reason</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Reason" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Reasons</SelectLabel>
                            <SelectItem value="servicing">Servicing</SelectItem>
                            <SelectItem value="job-work">Job work</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </Card>
    );
}

export default ReasonAdnUsageForm;
