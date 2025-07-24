import {useState, useEffect} from "react"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
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
    defaultValue: string;
    setSelectedValue: (value: string) => void;
}

const SelectField = ({datas, defaultValue, setSelectedValue} : SelectFieldProps) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    useEffect(() => {
        if(value){
            setSelectedValue(value);
        }
    }, [value]);

    return (
        <div className="pl-024 pr-024">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        className={cn("relative z-20 p-020 pt-016 pb-016 flex w-full justify-between bg-sy_container-neutral-normal rounded-020 body_m-prominent", open ? "border border-sy_line-super" : "border-none")}
                    >
                        {value
                            ? datas?.find((data) => data.value === value)?.label
                            : defaultValue}
                        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon/>}
                    </button>
                </PopoverTrigger>
                <PopoverContent asChild className="w-full min-w-[312px] z-10 bg-sy_container-neutral-normal p-0 shadow-none border-none body_m-prominent">
                    <Command className="bg-sy_container-neutral-normal mt-[-20px]">
                        <CommandList className="pt-020">
                            <CommandGroup className="text-sy_label-alternative rounded-010">
                                {datas?.map((data) => (
                                    <CommandItem
                                        key={data.value}
                                        value={data.value}
                                        className="p-012"
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        {data.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default SelectField;