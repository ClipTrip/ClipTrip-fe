import { cn } from "@/lib/utils";
import type { pagePath } from "@/routes/pagePath";
import type { ElementType } from "react";
import { NavLink } from "react-router-dom";

interface NaviItemProps {
  href: (typeof pagePath)[keyof typeof pagePath];
  Icon: ElementType;
  label: string;
}

const NaviItem = ({ href, Icon, label }: NaviItemProps) => {
  return (
    <NavLink to={href} end>
      {({ isActive }) => (
        <div className={cn("w-16 flex flex-col items-center cursor-pointer")}>
          <div className="w-16 h-8 flex items-center justify-center">
            <Icon isActive={isActive} />
          </div>
          <span
            className={cn(
              "label_s-prominent text-center text-sy_label-light",
              isActive && "text-sy_label-normal"
            )}
          >
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
};

export default NaviItem;
