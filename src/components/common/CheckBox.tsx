import { cn } from "@/lib/utils";
import CheckCircleIcon from "@/components/icons/system/CheckCircleIcon.tsx";
import ChevronRightIcon from "@/components/icons/system/ChevronRightIcon.tsx";

interface CheckBoxProps {
    id: string,
    label: string,
    type?: "default" | "primary",
    isChecked?: boolean,
    setIsChecked?: (value: boolean) => void,
    onClickRightIcon?: () => void,
}

const CheckBox = ({
                      id,
                      label,
                      type = "default",
                      isChecked,
                      setIsChecked,
                      onClickRightIcon,
}: CheckBoxProps) => {
    return (
        <div className="pb-016 pt-016 flex justify-between items-center">
            <div>
                <input
                    type="checkbox"
                    id={id}
                    className="hidden"
                    onChange={(e) => {
                        if (setIsChecked) {
                            setIsChecked(e.target.checked);
                        }
                    }}
                />
                <label htmlFor={id} className="flex items-center gap-016">
                    <CheckCircleIcon isActive={isChecked}/>
                    <p className={cn(
                        type === "default" && "title_s text-sy_label-normal font-regular",
                        type === "primary" && "title_m-prominent font-bold")}>{label}</p>
                </label>
            </div>
            {type === "default" && <button onClick={onClickRightIcon}><ChevronRightIcon/></button>}
        </div>

    );
};

export default CheckBox;