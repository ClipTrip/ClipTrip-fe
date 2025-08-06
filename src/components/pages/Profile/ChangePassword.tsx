import AppBar from "@/components/common/AppBar.tsx";
import TextField from "@/components/common/TextField.tsx";
import ArrowBackIcon from "@/components/icons/system/ArrowBackIcon.tsx";
import {useRef} from "react";
import {useTranslation} from "react-i18next";

interface ChangePasswordProps {
    onClickBackIcon: () => void;
}
const ChangePassword = ({onClickBackIcon}: ChangePasswordProps) => {
    const { t } = useTranslation(["appBar", "textField"]);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    return (
        <div className="absolute flex inset-0 justify-center bg-white">
            <div className="w-[360px] relative flex flex-col gap-[20px]">
                <AppBar LeadingIcon={ArrowBackIcon} title={t("appBar_set-02")} onLeadingIconClick={onClickBackIcon}/>
                <form className="flex flex-col gap-[36px] px-024">
                    <TextField
                        type="email"
                        placeholder={t("textField:textField_currentPassword")}
                        ref={emailRef}
                        onIconClick={() => {
                            if (emailRef.current)
                                emailRef.current.value = "";
                        }}
                    />
                    <TextField
                        type="password"
                        placeholder={t("textField:textField_newPassword")}
                        ref={passwordRef}
                        onIconClick={() => {
                            if (passwordRef.current)
                                passwordRef.current.value = "";
                        }}
                    />
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;