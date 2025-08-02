import SelectField from "@/components/common/SelectField.tsx";
import {useTranslation} from "react-i18next";

interface RegisterInfo {
    gender: string;
    age: string;
    language: string;
    location: string;
}

interface DetailInfoProps {
    onChange: (field: keyof RegisterInfo, value: string) => void;
}

const DetailInfo = ({onChange}: DetailInfoProps) => {
    const { t } = useTranslation(["selectField"]);

    const genderOptions = [
        { value: "MALE", label: t("selectField:selectField_gender-01") },
        { value: "FEMALE", label: t("selectField:selectField_gender-02") },
    ];

    const ageOptions = [
        { value: "CHILD", label: t("selectField:selectField_age-01") },
        { value: "TEENAGER", label: t("selectField:selectField_age-02") },
        { value: "YOUNG_ADULT", label: t("selectField:selectField_age-03") },
        { value: "ADULT", label: t("selectField:selectField_age-04") },
        { value: "SENIOR", label: t("selectField:selectField_age-05") },
    ];

    const languageOptions = [
        { value: "ENGLISH", label: t("selectField:selectField_language-01") },
        { value: "KOREAN", label: t("selectField:selectField_language-02") },
    ];

    const locationOptions = [
        { value: "UNITEDSTATES", label: t("selectField:selectField_country-01") },
        { value: "KOREA", label: t("selectField:selectField_country-02") },
        { value: "CHINA", label: t("selectField:selectField_country-03") },
        { value: "JAPAN", label: t("selectField:selectField_country-04") },
    ];


    return (
        <div className="w-full flex flex-col gap-012 mt-6">
            <SelectField
                datas={genderOptions}
                placeHolder={t("selectField_gender")}
                onChange={(val) => onChange("gender", val)}/>
            <SelectField
                datas={ageOptions}
                placeHolder={t("selectField_age")}
                onChange={(val) => onChange("age", val)}/>
            <SelectField
                datas={languageOptions}
                placeHolder={t("selectField_language")}
                onChange={(val) => onChange("language", val)}/>
            <SelectField
                datas={locationOptions}
                placeHolder={t("selectField_country")}
                onChange={(val) => onChange("location", val)}/>
        </div>
    );
};

export default DetailInfo;