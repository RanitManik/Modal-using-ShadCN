import React, { useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import { Label } from "@/components/ui/label";

function SerialNumber() {
    const [selectedSerialNumbers, setSelectedSerialNumbers] = useState<
        string[]
    >([]);

    const SerialNumberList = [
        { value: "01. Finished goods", label: "01. finished-goods" },
        { value: "02. Finished parts", label: "02. finished-parts" },
        { value: "03. Spare parts", label: "03. spare-parts" },
        { value: "04. Raw materials", label: "04. raw-materials" },
        { value: "05. Packaging materials", label: "05. packaging-materials" },
        { value: "06. Work in progress", label: "06. work-in-progress" },
        { value: "07. Components", label: "07. components" },
        { value: "08. Subassemblies", label: "08. subassemblies" },
        { value: "09. Accessories", label: "09. accessories" },
        { value: "10. Consumables", label: "10. consumables" },
        { value: "11. Finished assemblies", label: "11. finished-assemblies" },
        { value: "12. Semi-finished goods", label: "12. semi-finished-goods" },
        { value: "13. By-products", label: "13. by-products" },
        { value: "14. End-of-life items", label: "14. end-of-life-items" },
        { value: "15. Service parts", label: "15. service-parts" },
        { value: "16. Maintenance items", label: "16. maintenance-items" },
        { value: "17. Testing materials", label: "17. testing-materials" },
        { value: "18. Returned goods", label: "18. returned-goods" },
        { value: "19. Repaired items", label: "19. repaired-items" },
        { value: "20. Recycled materials", label: "20. recycled-materials" },
    ];

    return (
        <div className={`grid gap-2`}>
            <Label>Serial Numbers</Label>
            <MultiSelect
                modalPopover={true}
                options={SerialNumberList}
                onValueChange={setSelectedSerialNumbers}
                defaultValue={selectedSerialNumbers}
                placeholder="Select Serial Numbers"
                variant="create"
                animation={2}
                maxCount={2}
            />
        </div>
    );
}

export default SerialNumber;
