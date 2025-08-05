import AppBar from "@/components/common/AppBar.tsx";
import SelectField from "@/components/common/SelectField.tsx";
import ArrowBackIcon from "@/components/icons/system/ArrowBackIcon.tsx";
import {useTranslation} from "react-i18next";

interface LanguageSettingProps {
    onClickBackIcon?: () => void;
}
const LanguageSetting = ({onClickBackIcon}: LanguageSettingProps) => {
    const {t} = useTranslation(["appBar", "selectField"]);

    const languageOptions = [
        { value: "ENGLISH", label: t("selectField:selectField_language-01") },
        { value: "KOREAN", label: t("selectField:selectField_language-02") },
    ];

    return (
        <div className="absolute flex inset-0 justify-center bg-white">
            <div className="w-[360px] relative flex flex-col gap-[20px]">
                <AppBar LeadingIcon={ArrowBackIcon} title={t("appBar_set-01")} onLeadingIconClick={onClickBackIcon} />
                <SelectField datas={languageOptions} placeHolder={t("selectField:selectField_language")}/>
            </div>
        </div>
    );
};

export default LanguageSetting;