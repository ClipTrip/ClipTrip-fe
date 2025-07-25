import { cn } from "@/lib/utils";
import CheckCircleIcon from "@/components/icons/system/CheckCircleIcon.tsx";

interface CheckBoxProps {
    label: string,
    type?: "default" | "primary",
    isChecked?: boolean,
    setIsChecked: (value: boolean) => void,
}

const CheckBox = ({label, type = "default",isChecked, setIsChecked}: CheckBoxProps) => {

    return (
        <div className="p-012 pl-024 pr-024">
            <input type="checkbox" id="checkbox" className="hidden" onChange={(e) => {
                setIsChecked(e.target.checked);
            }}/>
            <label htmlFor="checkbox" className="flex items-center gap-016">
                <CheckCircleIcon isActive={isChecked} />
                <p className={cn(
                    type === "default" && "title_s text-sy_label-normal font-regular",
                    type === "primary" && "title_m-prominent font-bold")} >{label}</p>
            </label>
        </div>

    );
};

export default CheckBox;