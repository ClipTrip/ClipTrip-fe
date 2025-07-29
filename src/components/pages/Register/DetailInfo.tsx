import SelectField from "@/components/common/SelectField.tsx";
import {useTranslatedOptions} from "@/hooks/useTranslatedOptions.ts";
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
    const { t } = useTranslation(["headline","textField", "selectField", "buttonAction", "listItem"]);

    const genderOptions = useTranslatedOptions("gender");
    const ageOptions = useTranslatedOptions("age");
    const languageOptions = useTranslatedOptions("language");
    const locationOptions = useTranslatedOptions("location");

    return (
        <div className="w-full flex flex-col gap-012 mt-6">
            <SelectField
                datas={genderOptions}
                placeHolder={t("selectField:selectField_gender")}
                onChange={(val) => onChange("gender", val)}/>
            <SelectField
                datas={ageOptions}
                placeHolder={t("selectField:selectField_age")}
                onChange={(val) => onChange("age", val)}/>
            <SelectField
                datas={languageOptions}
                placeHolder={t("selectField:selectField_language")}
                onChange={(val) => onChange("language", val)}/>
            <SelectField
                datas={locationOptions}
                placeHolder={t("selectField:selectField_country")}
                onChange={(val) => onChange("location", val)}/>
        </div>
    );
};

export default DetailInfo;