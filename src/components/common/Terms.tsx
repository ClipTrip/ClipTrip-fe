import AppBar from "@/components/common/AppBar.tsx";
import CloseIcon from "@/components/icons/system/CloseIcon.tsx";
import ArrowBackIcon from "@/components/icons/system/ArrowBackIcon.tsx";

import {useTranslation} from "react-i18next";

interface TermsProps {
    type: string,
    originScreen: string,
    onClose: (value: boolean) => void,
}

const Terms = ({type, originScreen, onClose}: TermsProps) => {
    const {t} = useTranslation();

    const selectedTerms = {
        namespace: type === "privacy" ? "termsOfService" : "termsOfService2",
        itemCount: type === "privacy" ? 7 : 10,
    }
    const termsItems = Array.from({ length: selectedTerms.itemCount }, (_, i) => {
        const num = i + 1;
        const numStr = num < 10 ? `0${num}` : `${num}`;

        return {
            title: t(`${selectedTerms.namespace}:termsOfService_title_${numStr}`),
            supportingText: t(`${selectedTerms.namespace}:termsOfService_supportingText_${numStr}`),
        };
    });

    return (
        <div className="fixed flex inset-0 justify-center z-50 overflow-y-auto bg-white">
            <div className="w-[360px] h-dvh">
                <AppBar LeadingIcon={originScreen === "register" ? CloseIcon : ArrowBackIcon} title={t(type === "privacy" ? "appBar:appBar_set-03" : "appBar:appBar_set-04")} onLeadingIconClick={() => onClose(false)}/>
                <div className="p-024 flex flex-col gap-028">
                    {type === "privacy" && <p className="body_m">
                        {t("termsOfService:termsOfService_title_00")}
                    </p>}
                    {termsItems.map((item, index) => (
                        <div key={index} className="flex flex-col gap-008">
                            <p className="title_m-prominent">{item.title}</p>
                            <p className="body_m whitespace-pre-line">{item.supportingText}</p>
                        </div>
                    ))}
                    {type === "privacy" && <p className="title_m-prominent">
                        {t("termsOfService:termsOfService_title_08")}
                    </p>}
                </div>
            </div>
        </div>
    );
};

export default Terms;