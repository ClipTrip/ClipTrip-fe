import AppBar from "@/components/common/AppBar";
import Headline from "@/components/common/Headline";
import ArrowBackIcon from "@/components/icons/system/ArrowBackIcon";
import BasicInfo from "@/components/pages/Register/BasicInfo.tsx";
import DetailInfo from "@/components/pages/Register/DetailInfo.tsx";
import TermsAgreement from "@/components/pages/Register/TermsAgreement.tsx";

import userStore from "@/store/userStore.ts";
import {useRef} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(["headline","textField", "selectField", "buttonAction", "listItem"]);

    const {
        isNext,
        setIsNext,
        registerInfo,
        setRegisterInfo,
        isCheck,
        handleCheckBoxChange,
        handleAllCheck,
    } = userStore();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    console.log("미사용 방지용으로 api 수정되는대로 바로 삭제하겠습니다!", registerInfo);

    return (
        <div className="flex flex-col items-center">
            <AppBar LeadingIcon={ArrowBackIcon} onLeadingIconClick={() => {navigate(-1)}}/>
            <Headline
                className="w-[195px] mt-7"
                title={isNext ? t("headline_title_signUp-02"): t("headline_title_signUp-01")}
                description={isNext ? t("headline_supportingText_signUp-02") : t("headline_supportingText_signUp-01")}
            />
            {!isNext &&
              <BasicInfo emailRef={emailRef} passwordRef={passwordRef} setNext={() => setIsNext(true)}/>
            }
            {isNext && (
                <>
                    <DetailInfo onChange={(field, value) => setRegisterInfo(field, value)} />
                    <TermsAgreement isCheck={isCheck} onCheck={handleCheckBoxChange} onCheckAll={handleAllCheck}/>
                </>
            )}
        </div>
);
};

export default RegisterPage;