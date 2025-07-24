import ButtonIcon from "@/components/common/ButtonIcon";
import CancelIcon from "@/components/icons/system/CancelIcon";
import { cn } from "@/lib/utils";
import { useState, type ElementType } from "react";

interface TextFieldProps {
  supportingText?: string;
  onIconClick?: () => void;
  Icon?: ElementType;
  isError?: boolean;
}

const TextField = ({
  supportingText,
  Icon = CancelIcon,
  onIconClick,
  isError,
  className,
  type,
  ...props
}: TextFieldProps & React.ComponentProps<"input">) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-[312px] h-fit bg-sy_container-neutral-normal">
      <div className="relative">
        <input
          type={type}
          data-slot="input"
          className={cn(
            "placeholder:label_m placeholder:text-sy_label-light w-full h-12 p-012 rounded-010 outline-none pr-12 text-sy_label-normal label_m",
            "focus:border focus:border-sy_line-super",
            isError &&
              "border border-sy_status-negative-normal focus:border-sy_status-negative-normal",
            className
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {focused && (
          <ButtonIcon
            className="absolute right-0 top-0 bg-transparent active:bg-transparent"
            Icon={Icon}
            onClick={onIconClick}
          />
        )}
      </div>
      {supportingText && (
        <p
          className={cn(
            "h-[22px] w-full pt-004 px-012 body_s text-sy_label-light",
            isError && "text-sy_status-negative-normal"
          )}
        >
          {supportingText}
        </p>
      )}
    </div>
  );
};

export default TextField;
