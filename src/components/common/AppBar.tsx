import { cn } from "@/lib/utils";
import type { ElementType } from "react";

interface IconButtonProps {
  Icon?: ElementType;
  onClick?: () => void;
}

const IconButton = ({ Icon, onClick }: IconButtonProps) => {
  return (
    <button
      className={cn(
        "w-12 h-12 flex items-center justify-center shrink-0",
        Icon && "cursor-pointer"
      )}
      onClick={onClick}
      disabled={!Icon}
    >
      {Icon ? <Icon /> : null}
    </button>
  );
};

interface AppBarProps {
  title?: string;
  LeadingIcon?: ElementType;
  FirstIcon?: ElementType;
  SecondIcon?: ElementType;
  ThirdIcon?: ElementType;
  onLeadingIconClick?: () => void;
  onFirstIconClick?: () => void;
  onSecondIconClick?: () => void;
  onThirdIconClick?: () => void;
}

const AppBar = ({
  title,
  LeadingIcon,
  FirstIcon,
  SecondIcon,
  ThirdIcon,
  onLeadingIconClick,
  onFirstIconClick,
  onSecondIconClick,
  onThirdIconClick
}: AppBarProps) => {
  return (
    <header className="w-[360px] h-[52px] px-012 flex items-center">
      <div className="flex items-center w-full">
        {LeadingIcon && <IconButton Icon={LeadingIcon} onClick={onLeadingIconClick} />}
        <h3 className={cn("w-full pl-012 headline_m text-sy_label-strong", LeadingIcon && "pl-0")}>
          {title}
        </h3>
      </div>
      <div className="w-fit h-fit flex">
        <IconButton Icon={FirstIcon} onClick={onFirstIconClick} />
        <IconButton Icon={SecondIcon} onClick={onSecondIconClick} />
        <IconButton Icon={ThirdIcon} onClick={onThirdIconClick} />
      </div>
    </header>
  );
};

export default AppBar;
