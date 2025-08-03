import AppBar from "@/components/common/AppBar.tsx";
import ListItem from "@/components/common/ListItem.tsx";
import ChevronRightIcon from "@/components/icons/system/ChevronRightIcon.tsx";
import Terms from "@/components/common/Terms.tsx";

import {useTranslation} from "react-i18next";
import {useState} from "react";

const Profile = () => {
  const {t} = useTranslation(["appBar", "listItem"]);
  const [open, setOpen] = useState<{language: boolean, password: boolean, privacy: boolean, terms: boolean}>({
    language: false,
    password: false,
    privacy: false,
    terms: false,
  })

  const handleOpen = (key: 'language' | 'password' | 'privacy'| 'terms') => {
    console.log("ddd")
    setOpen(prev => ({...prev, [key]: true}));
  }

  return(
      <div className="w-full h-full">
        <AppBar title={t("appBar_navi-04")} />
        <div className="flex flex-col gap-024 mt-[8px]">
          <ListItem title={t("listItem:listItem_set-01")} RightIcon={<ChevronRightIcon/>}/>
          <ListItem title={t("listItem:listItem_set-02")} RightIcon={<ChevronRightIcon/>}/>
          <ListItem title={t("listItem:listItem_set-03")} RightIcon={ChevronRightIcon} onRightIconClick={() => handleOpen("privacy")}/>
          <ListItem title={t("listItem:listItem_set-04")} RightIcon={<ChevronRightIcon/>}/>
          <p className="px-024 py-008 title_m text-sy_label-light cursor-pointer">{t("listItem:listItem_set-05")}</p>
          <p className="px-024 py-008 title_m text-sy_label-light cursor-pointer">{t("listItem:listItem_set-06")}</p>
        </div>
        {open.privacy && <Terms type={"privacy"} originScreen={"profile"} onClose={() => setOpen(prev => ({...prev, privacy: false}))}/>}
      </div>
  )
};

export default Profile;
