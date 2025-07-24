import NaviItem from "@/components/common/NaviItem";
import HomeIcon from "@/components/icons/navi/HomeIcon";
import PlacesIcon from "@/components/icons/navi/PlacesIcon";
import PlansIcon from "@/components/icons/navi/PlansIcon";
import ProfileIcon from "@/components/icons/navi/ProfileIcon";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const { t } = useTranslation("naviItem");
  return (
    <div className={cn("w-[360px] pt-004 px-024 pb-028 bg-sy_container-neutral-white", className)}>
      <nav className="bg-sy_container-neutral-white h-[72px] w-full rounded-full flex items-center justify-center shadow-elevation">
        <NaviItem href="" Icon={HomeIcon} label={t("naviItem-01")} />
        <NaviItem href="trips" Icon={PlansIcon} label={t("naviItem-02")} />
        <NaviItem href="places" Icon={PlacesIcon} label={t("naviItem-03")} />
        <NaviItem href="profile" Icon={ProfileIcon} label={t("naviItem-04")} />
      </nav>
    </div>
  );
};

export default Navigation;
