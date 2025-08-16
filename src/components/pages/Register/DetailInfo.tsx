import SelectField from '@/components/common/SelectField.tsx';
import TextField from '@/components/common/TextField.tsx';
import SearchFieldv2 from '@/components/pages/Register/SearchFieldv2.tsx';
import { LANGUAGE } from '@/constants/language';
import { setLanguage } from '@/lib/i18n';
import type { LanguageName } from '@/types/type';
import { useTranslation } from 'react-i18next';

interface RegisterInfo {
  gender: string;
  age: string;
  language: string;
  countryCode: string;
}

interface DetailInfoProps {
  ageValue: number;
  onChange: (field: keyof RegisterInfo, value: string) => void;
}

const DetailInfo = ({ ageValue, onChange }: DetailInfoProps) => {
  const { t } = useTranslation(['selectField', 'buttonAction', 'searchField']);

  const genderOptions = [
    { value: 'MALE', label: t('selectField:selectField_gender-01') },
    { value: 'FEMALE', label: t('selectField:selectField_gender-02') },
  ];

  const languageOptions = [
    { value: 'ENGLISH', label: t('buttonAction:button-action_language-01') },
    { value: 'KOREAN', label: t('buttonAction:button-action_language-02') },
    { value: 'JAPANESE', label: t('buttonAction:button-action_language-03') },
    { value: 'CHINESE', label: t('buttonAction:button-action_language-04') },
  ];

  const locationOptions = [
    { value: 'US', label: t('selectField:selectField_country-01') },
    { value: 'KR', label: t('selectField:selectField_country-02') },
    { value: 'CN', label: t('selectField:selectField_country-03') },
    { value: 'JP', label: t('selectField:selectField_country-04') },
    { value: 'TW', label: t('selectField:selectField_country-05') },
    { value: 'HK', label: t('selectField:selectField_country-06') },
    { value: 'TH', label: t('selectField:selectField_country-07') },
    { value: 'IN', label: t('selectField:selectField_country-08') },
    { value: 'DE', label: t('selectField:selectField_country-09') },
    { value: 'FR', label: t('selectField:selectField_country-10') },
    { value: 'UK', label: t('selectField:selectField_country-11') },
    { value: 'CA', label: t('selectField:selectField_country-12') },
    { value: 'AU', label: t('selectField:selectField_country-13') },
  ];

  return (
    <div className='gap-012 mt-6 flex w-full flex-col items-center'>
      <SelectField
        datas={genderOptions}
        placeHolder={t('selectField_gender')}
        onChange={(val) => onChange('gender', val)}
      />
      <TextField
        placeholder={t('selectField_age')}
        type='number'
        onChange={(event) => onChange('age', event.target.value)}
        value={ageValue === 0 ? '' : ageValue}
        onIconClick={() => onChange('age', '')}
      />
      <SelectField
        datas={languageOptions}
        placeHolder={t('selectField_language')}
        onChange={(val) => {
          onChange('language', val);
          setLanguage(LANGUAGE[val as LanguageName]);
        }}
      />
      <SearchFieldv2
        placeHolder={t('searchField:country')}
        datas={locationOptions}
        onChange={(val) => onChange('countryCode', val)}
      />
    </div>
  );
};

export default DetailInfo;
