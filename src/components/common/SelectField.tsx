import {useState} from "react"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils";
import ArrowDropDownIcon from "@/components/icons/system/ArrowDropDownIcon.tsx";
import ArrowDropUpIcon from "@/components/icons/system/ArrowDropUpIcon.tsx";

interface DataOption {
    value: string;
    label: string;
}

interface SelectFieldProps {
    datas: DataOption[];
    placeHolder?: string;
    onChange?: (val: string) => void;
}

const SelectField = ({datas, placeHolder, onChange} : SelectFieldProps) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <div className="pl-024 pr-024 w-full">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        className={cn(
                            "relative z-10 p-020 pt-016 pb-016 flex w-full justify-between bg-sy_container-neutral-normal rounded-020 body_m-prominent",
                            open ? "border border-sy_line-super" : "border-none"
                        )}
                    >
                        {value
                            ? datas?.find((data) => data.value === value)?.label
                            : placeHolder}
                        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </button>
                </PopoverTrigger>
                {open && (
                    <div className="w-full mt-2 bg-sy_container-neutral-normal rounded-020 z-0 mt-[-20px] ">
                        <Command className="bg-sy_container-neutral-normal ">
                            <CommandList className="pt-020">
                                <CommandGroup className="text-sy_label-alternative">
                                    {datas?.map((data) => (
                                        <CommandItem
                                            key={data.value}
                                            value={data.value}
                                            className="p-012 cursor-pointer hover:bg-sy_container-hover"
                                            onSelect={(currentValue) => {
                                                if(onChange) onChange(currentValue);
                                                setValue(currentValue === value ? "" : currentValue);
                                                setOpen(false);
                                            }}
                                        >
                                            {data.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </div>
                )}
            </Popover>

        </div>
    );
};

export default SelectField;