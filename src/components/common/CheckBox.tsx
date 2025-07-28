import { cn } from "@/lib/utils";
import CheckCircleIcon from "@/components/icons/system/CheckCircleIcon.tsx";
import ChevronRightIcon from "@/components/icons/system/ChevronRightIcon.tsx";

interface CheckBoxProps {
    label: string,
    type?: "default" | "primary",
    isChecked?: boolean,
    setIsChecked: (value: boolean) => void,
}

const CheckBox = ({label, type = "default", isChecked, setIsChecked, ...props}: CheckBoxProps) => {

    return (
        <div className="pb-016 pt-016 flex justify-between items-center">
            <div>
                <input
                    type="checkbox"
                    id="checkbox"
                    className="hidden"
                    onChange={(e) => {
                        setIsChecked(e.target.checked);
                    }}
                    {...props}
                />
                <label htmlFor="checkbox" className="flex items-center gap-016">
                    <CheckCircleIcon isActive={isChecked}/>
                    <p className={cn(
                        type === "default" && "title_s text-sy_label-normal font-regular",
                        type === "primary" && "title_m-prominent font-bold")}>{label}</p>
                </label>
            </div>
            {type === "default" && <ChevronRightIcon/>}
        </div>

    );
};

export default CheckBox;