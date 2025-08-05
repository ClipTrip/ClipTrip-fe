import AppBar from '@/components/common/AppBar.tsx';
import SelectField from '@/components/common/SelectField.tsx';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon.tsx';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { setLanguage } from '@/lib/i18n.ts';
import type { LanguageType } from '@/types/type.ts';

interface LanguageSettingProps {
  onClickBackIcon?: () => void;
}
const LanguageSetting = ({ onClickBackIcon }: LanguageSettingProps) => {
  const { t } = useTranslation(['appBar', 'selectField']);
  const [languageCode, setLanguageCode] = useState<string>(
    localStorage.getItem('language') || document.documentElement.lang
  );

  useEffect(() => {
      setLanguage(languageCode as LanguageType);
  }, [languageCode]);

  const languageOptions = [
    { value: 'en', label: t('selectField:selectField_language-01') },
    { value: 'ko', label: t('selectField:selectField_language-02') },
    // { value: "ja", label: t("selectField:selectField_language-03") },
    // { value: "zh", label: t("selectField:selectField_language-04") },
  ];

  const findLanguageOptions = () => {
    return languageOptions.find((option) => option.value === languageCode)?.label;
  };

  return (
    <div className='absolute inset-0 flex justify-center bg-white'>
      <div className='relative flex w-[360px] flex-col gap-[20px]'>
        <AppBar
          LeadingIcon={ArrowBackIcon}
          title={t('appBar_set-01')}
          onLeadingIconClick={onClickBackIcon}
        />
        <SelectField
          datas={languageOptions}
          placeHolder={findLanguageOptions()}
          onChange={setLanguageCode}
        />
      </div>
    </div>
  );
};

export default LanguageSetting;
