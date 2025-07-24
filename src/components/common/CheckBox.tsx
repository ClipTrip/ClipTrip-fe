import {useState} from "react";
import { cn } from "@/lib/utils";
import CheckCircleIcon from "@/components/icons/system/CheckCircleIcon.tsx";

interface CheckBoxProps {
    label: string,
    type?: "default" | "primary",
    isActive?: boolean,
}

const CheckBox = ({label, type = "default", isActive = false}: CheckBoxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(isActive);

    return (
        <div className="p-012 pl-024 pr-024">
            <label htmlFor="checkbox" className="flex items-center gap-016" onClick={() => setIsChecked(!isChecked)}>
                <CheckCircleIcon isActive={isChecked} />
                <p className={cn(
                    type === "default" && "title_s text-sy_label-normal font-regular",
                    type === "primary" && "title_m-prominent font-bold")}>{label}</p>
            </label>
        </div>

    );
};

export default CheckBox;