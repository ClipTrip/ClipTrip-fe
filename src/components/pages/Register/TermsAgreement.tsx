import Drawers from "@/components/common/Drawers.tsx";
import ButtonActionFill from "@/components/common/ButtonActionFill.tsx";
import CheckBox from "@/components/common/CheckBox.tsx";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

interface CheckState{
    all: boolean,
    privacy: boolean,
    service: boolean,
};

interface TermsAgreementProps {
    isCheck: CheckState,
    onCheck: (key: "privacy" | "service", value: boolean) => void,
    onCheckAll: () => void,
}

const TermsAgreement = ({isCheck, onCheck, onCheckAll}: TermsAgreementProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation(["headline","textField", "selectField", "buttonAction", "listItem"]);

    return (
        <Drawers trigger={
            <ButtonActionFill className="mt-[18px]">{t("buttonAction:button-action_next")}</ButtonActionFill>
        }>
            <CheckBox
                id="terms-all"
                label={t("listItem:listItem_term-all")}
                type="primary"
                isChecked={isCheck.all}
                setIsChecked={onCheckAll}
            />
            <CheckBox
                id="terms-privacy"
                label={t("listItem:listItem_term-01")}
                isChecked={isCheck.privacy}
                setIsChecked={(val) => onCheck("privacy", val)}
                onClickRightIcon={() => navigate("/terms", { state: { type: "privacy" } })}
            />
            <CheckBox
                id="terms-service"
                label={t("listItem:listItem_term-02")}
                isChecked={isCheck.service}
                setIsChecked={(val) => onCheck("service", val)}
                onClickRightIcon={() => navigate("/terms")}
            />
            <ButtonActionFill className="mt-[28px] mb-[28px]" disabled={!isCheck.all}>
                {t("buttonAction:button-action_accept")}
            </ButtonActionFill>
        </Drawers>
    );
};

export default TermsAgreement;