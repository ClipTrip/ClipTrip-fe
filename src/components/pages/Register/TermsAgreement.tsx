import Drawers from "@/components/common/Drawers.tsx";
import ButtonActionFill from "@/components/common/ButtonActionFill.tsx";
import CheckBox from "@/components/common/CheckBox.tsx";
import Terms from "@/components/common/Terms.tsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";

interface CheckState{
    all: boolean,
    privacy: boolean,
    service: boolean,
};

interface TermsAgreementProps {
    isCheck: CheckState,
    onCheck: (key: "all" | "privacy" | "service", value: boolean) => void,
}

const TermsAgreement = ({isCheck, onCheck}: TermsAgreementProps) => {
    const [isShowTerms, setIsShowTerms] = useState(false);
    const [type, setType] = useState<string>("");
    const { t } = useTranslation(["buttonAction", "listItem"]);

    const handleTermsDetails = (type: string) => {
        setType(type);
        setIsShowTerms(true);
    }

    return (
        <>
            {!isShowTerms && <Drawers trigger={
                <ButtonActionFill className="mt-[18px]">{t("button-action_next")}</ButtonActionFill>
            }>
                <CheckBox
                    id="terms-all"
                    label={t("listItem:listItem_term-all")}
                    type="primary"
                    isChecked={isCheck.all}
                    setIsChecked={(val) => onCheck("all", val)}
                />
                <CheckBox
                    id="terms-privacy"
                    label={t("listItem:listItem_term-01")}
                    isChecked={isCheck.privacy}
                    setIsChecked={(val) => onCheck("privacy", val)}
                    onClickRightIcon={() => handleTermsDetails("privacy")}
                />
                <CheckBox
                    id="terms-service"
                    label={t("listItem:listItem_term-02")}
                    isChecked={isCheck.service}
                    setIsChecked={(val) => onCheck("service", val)}
                    onClickRightIcon={() => handleTermsDetails("service")}
                />
                <ButtonActionFill className="mt-[28px] mb-[28px]" disabled={!isCheck.all}>
                    {t("buttonAction:button-action_accept")}
                </ButtonActionFill>
            </Drawers>}
            {isShowTerms && <Terms type={type} originScreen={"register"} onClose={setIsShowTerms}/>}
        </>
    );
};

export default TermsAgreement;