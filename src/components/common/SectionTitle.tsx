import ButtonIcon from "@/components/common/ButtonIcon";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
  LeadingIcon?: ElementType;
  RightIcon?: ElementType;
  size?: "m" | "l";
}

const SectionTitle = ({
  title,
  description,
  LeadingIcon,
  RightIcon,
  size = "m"
}: SectionTitleProps) => {
  return (
    <div className="px-012 w-full">
      <div className="flex items-center h-12">
        {LeadingIcon && <ButtonIcon Icon={LeadingIcon} />}
        <h2
          className={cn(
            "grow",
            !LeadingIcon && "pl-012",
            size === "m" && "headline_m",
            size === "l" && "headline_l"
          )}
        >
          {title}
        </h2>
        {RightIcon && <ButtonIcon Icon={RightIcon} />}
      </div>
      {description && <span className="px-012 text-sy_label-light">{description}</span>}
    </div>
  );
};

export default SectionTitle;
