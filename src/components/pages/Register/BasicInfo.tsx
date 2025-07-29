import TextField from "@/components/common/TextField.tsx";
import ButtonActionFill from "@/components/common/ButtonActionFill.tsx";
import {useTranslation} from "react-i18next";

interface BasicInfoProps {
    emailRef: React.RefObject<HTMLInputElement | null>;
    passwordRef: React.RefObject<HTMLInputElement | null>;
    setNext?: () => void;
}

const BasicInfo = ({emailRef, passwordRef, setNext}: BasicInfoProps) => {
    const { t } = useTranslation(["textField", "buttonAction"]);

    return (
        <form className="flex flex-col items-center gap-8 mt-6">
            <TextField
                type="email"
                placeholder={t("textField:textField_signUp-id")}
                ref={emailRef}
                onIconClick={() => {
                    if (emailRef.current)
                        emailRef.current.value = "";
                }}
            />
            <TextField
                type="password"
                placeholder={t("textField:textField_signUp-password")}
                ref={passwordRef}
                onIconClick={() => {
                    if (passwordRef.current)
                        passwordRef.current.value = "";
                }}
            />
            <ButtonActionFill variant="primary" className="mt-[18px]" onClick={() => {
                if (emailRef?.current?.value && passwordRef.current?.value && setNext) setNext();
            }}>
                {t("buttonAction:button-action_next")}
            </ButtonActionFill>
        </form>
    );
};

export default BasicInfo;