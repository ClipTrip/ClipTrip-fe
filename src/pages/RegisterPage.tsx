import AppBar from '@/components/common/AppBar';
import Headline from '@/components/common/Headline';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon';
import BasicInfo from '@/components/pages/Register/BasicInfo.tsx';
import DetailInfo from '@/components/pages/Register/DetailInfo.tsx';
import TermsAgreement from '@/components/pages/Register/TermsAgreement.tsx';

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['headline']);

  const [isNext, setIsNext] = useState(false);
  const [registerInfo, setRegisterInfo] = useState<{
    gender: string;
    age: string;
    language: string;
    location: string;
  }>({
    gender: '',
    age: '',
    language: '',
    location: '',
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
  const isAllFilled =
    registerInfo.gender !== ''
    && registerInfo.age !== ''
    && registerInfo.language !== ''
    && registerInfo.location !== '';

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

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  console.log(
    '미사용 방지용으로 api 수정되는대로 바로 삭제하겠습니다!',
    registerInfo
  );

  return (
    <div className='flex flex-col items-center'>
      <AppBar
        LeadingIcon={ArrowBackIcon}
        onLeadingIconClick={() => (isNext ? setIsNext(false) : navigate(-1))}
      />
      <Headline
        className='mt-7 w-[195px]'
        title={
          isNext ? t('headline_title_signUp-02') : t('headline_title_signUp-01')
        }
        description={
          isNext
            ? t('headline_supportingText_signUp-02')
            : t('headline_supportingText_signUp-01')
        }
      />
      {!isNext && (
        <BasicInfo
          emailRef={emailRef}
          passwordRef={passwordRef}
          setNext={() => setIsNext(true)}
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
          />
        </>
      )}
    </div>
  );
};

export default RegisterPage;
