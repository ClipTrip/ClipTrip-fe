import { useState } from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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

const SelectField = ({ datas, placeHolder, onChange }: SelectFieldProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="pl-024 pr-024 w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "relative p-020 py-016 flex w-full justify-between bg-sy_container-neutral-normal rounded-020 body_m-prominent",
              open ? "border border-sy_line-super z-50" : "border-none z-20"
            )}
          >
            {value
              ? datas?.find((data) => data.value === value)?.label
              : placeHolder}
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[312px] mt-[-20px] border-none p-0 bg-sy_container-neutral-normal rounded-020 z-40 shadow-lg"
          align="start"
        >
          <Command className="bg-sy_container-neutral-normal">
            <CommandList className="pt-020">
              <CommandGroup className="text-sy_label-alternative">
                {datas?.map((data) => (
                  <CommandItem
                    key={data.value}
                    value={data.value}
                    className="p-012 cursor-pointer hover:bg-sy_container-hover"
                    onSelect={(currentValue) => {
                      if (onChange) onChange(currentValue);
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
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectField;
