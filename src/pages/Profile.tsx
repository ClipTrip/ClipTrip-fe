import AppBar from "@/components/common/AppBar.tsx";
import MyPageListItem from "@/components/pages/Profile/MyPageListItem.tsx";
import ChevronRightIcon from "@/components/icons/system/ChevronRightIcon.tsx";
import Terms from "@/components/common/Terms.tsx";
import LanguageSetting from "@/components/pages/Profile/LanguageSetting.tsx";
import ChangePassword from "@/components/pages/Profile/ChangePassword.tsx";
import Dialog from "@/components/pages/Profile/Dialog.tsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useLogout} from "@/hooks/useAuth.ts";

const Profile = () => {
  const {t} = useTranslation(["appBar", "listItem", "modal", "buttonAction"]);
  const {mutateAsync, isPending} = useLogout();
  const [open, setOpen] = useState<{language: boolean, password: boolean, privacy: boolean, service: boolean}>({
    language: false,
    password: false,
    privacy: false,
    service: false,
  })

  const handleOpenAndClose = (key: 'language' | 'password' | 'privacy'| 'service', state: boolean) => {
    setOpen(prev => ({...prev, [key]: state}));
  }

  const handleLogout = async () => {
    if(isPending) return null;

    await mutateAsync();
  }

  return(
      <div className="w-full h-full relative">
        <AppBar title={t("appBar_navi-04")} />
        <div className="flex flex-col mt-[8px]">
          <MyPageListItem title={t("listItem:listItem_set-01")} RightIcon={ChevronRightIcon} onRightIconClick={() => handleOpenAndClose("language", true)} />
          <MyPageListItem title={t("listItem:listItem_set-02")} RightIcon={ChevronRightIcon} onRightIconClick={() => handleOpenAndClose("password", true)}/>
          <MyPageListItem title={t("listItem:listItem_set-03")} RightIcon={ChevronRightIcon} onRightIconClick={() => handleOpenAndClose("privacy", true)}/>
          <MyPageListItem title={t("listItem:listItem_set-04")} RightIcon={ChevronRightIcon} onRightIconClick={() => handleOpenAndClose("service", true)}/>
          <Dialog
              trigger={<p className="title_m text-sy_label-light py-020 px-024 cursor-pointer">{t("listItem:listItem_set-05")}</p>}
              title={t("modal:modal_title_logOut")}
              actionButtonText={t("buttonAction:button-action_logOut")}
              onClickActionButton={handleLogout}
              variant="normal"
          />
          <Dialog
              trigger={<p className="title_m text-sy_label-light py-020 px-024 cursor-pointer">{t("listItem:listItem_set-06")}</p>}
              title={t("modal:modal_title_deleteAccount")}
              description={t("modal:modal_supportingText_deleteAccount")}
              actionButtonText={t("buttonAction:button-action_delete")}
              variant="delete"
          />

        </div>
        {open.language && <LanguageSetting onClickBackIcon={() => handleOpenAndClose("language", false)}/>}
        {open.password && <ChangePassword onClickBackIcon={() => handleOpenAndClose("password", false)}/>}
        {open.privacy && <Terms type={"privacy"} originScreen={"profile"} onClose={() => handleOpenAndClose("privacy", false)}/>}
        {open.service && <Terms type={"service"} originScreen={"profile"} onClose={() => handleOpenAndClose("service", false)}/>}
      </div>
  )
};


export default Profile;
