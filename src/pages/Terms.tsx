import AppBar from "@/components/common/AppBar.tsx";
import CloseIcon from "@/components/icons/system/CloseIcon.tsx";

import {useTranslation} from "react-i18next";
import {useNavigate, useLocation} from "react-router-dom";

const Terms = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {t} = useTranslation();

    const type = location.state?.type || "service";

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
        <>
            <AppBar LeadingIcon={CloseIcon} title={t(type === "privacy" ? "appBar:appBar_set-03" : "appBar:appBar_set-04")} onLeadingIconClick={() => navigate("/register")}/>
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
        </>
    );
};

export default Terms;