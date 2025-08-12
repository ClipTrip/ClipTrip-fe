import AppBar from '@/components/common/AppBar';
import Headline from '@/components/common/Headline';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon';
import BasicInfo from '@/components/pages/Register/BasicInfo.tsx';
import DetailInfo from '@/components/pages/Register/DetailInfo.tsx';
import TermsAgreement from '@/components/pages/Register/TermsAgreement.tsx';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {useRegister} from "@/hooks/useAuth.ts";
import type {RegisterRequest} from "@/types/auth.ts";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['headline']);
  const {mutateAsync, isPending} = useRegister();

  const [isNext, setIsNext] = useState(false);
  const [registerInfo, setRegisterInfo] = useState<{
    email: string;
    password: string;
    gender: string;
    age: number;
    language: string;
    countryCode: string;
  }>({
    email: '',
    password: '',
    gender: '',
    age: 0,
    language: '',
    countryCode: '',
  });
  const [isCheck, setIsCheck] = useState<{
    all: boolean;
    privacy: boolean;
    service: boolean;
  }>({
    all: false,
    privacy: false,
    service: false,
  });
  const isAllFilled = registerInfo.gender !== '' && registerInfo.age !== 0 && registerInfo.language !== '' && registerInfo.location !== '';

  const handleRegisterInfo = (field: string, value: string) => {
    setRegisterInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckBoxChange = (
    key: 'all' | 'privacy' | 'service',
    value: boolean
  ) => {
    setIsCheck((prev) => {
      if (key === 'all') {
        return {
          all: value,
          privacy: value,
          service: value,
        };
      } else {
        const newState = {
          ...prev,
          [key]: value,
        };
        newState.all = newState.privacy && newState.service;
        return newState;
      }
    });
  };

  const handleSubmitRegisterInfo = async () => {
    if (isPending) return null;
    await mutateAsync({...registerInfo} as RegisterRequest)
  }

  return (
    <div className='flex flex-col items-center'>
      <AppBar
        LeadingIcon={ArrowBackIcon}
        onLeadingIconClick={() => (isNext ? setIsNext(false) : navigate(-1))}
      />
      <Headline
        className='mt-7 w-[195px]'
        title={isNext ? t('headline_title_signUp-02') : t('headline_title_signUp-01')}
        description={isNext ? t('headline_supportingText_signUp-02') : t('headline_supportingText_signUp-01')}
      />
      {!isNext && (
        <BasicInfo
          emailValue={registerInfo.email}
          passwordValue={registerInfo.password}
          onChangeValue={handleRegisterInfo}
          handleNextButton={() => setIsNext(true)}
        />
      )}
      {isNext && (
        <>
          <DetailInfo
            onChange={(field, value) => handleRegisterInfo(field, value)}
          />
          <TermsAgreement
            isCheck={isCheck}
            onCheck={handleCheckBoxChange}
            isGoNext={isAllFilled}
            onClickGoNext={handleSubmitRegisterInfo}
          />
        </>
      )}
    </div>
  );
};

export default RegisterPage;
