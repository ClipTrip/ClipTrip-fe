import AppBar from '@/components/common/AppBar';
import ButtonActionFill from '@/components/common/ButtonActionFill';
import Headline from '@/components/common/Headline';
import ArrowBackIcon from '@/components/icons/system/ArrowBackIcon';
import { setLanguage } from '@/lib/i18n';
import { useTranslation } from 'react-i18next';

interface SelectLanguageProps {
  onBackClick?: () => void;
}

const SelectLanguage = ({ onBackClick }: SelectLanguageProps) => {
  const { t } = useTranslation(['headline', 'buttonAction']);

  const languages = [
    { code: 'en', label: t('buttonAction:button-action_language-01') },
    { code: 'ko', label: t('buttonAction:button-action_language-02') },
    { code: 'ja', label: t('buttonAction:button-action_language-03') },
    { code: 'zh', label: t('buttonAction:button-action_language-04') },
  ] as const;

  return (
    <>
      <AppBar
        LeadingIcon={ArrowBackIcon}
        onLeadingIconClick={onBackClick}
      />

      <Headline
        title={t('headline_title_onb-00')}
        description={t('headline_supportingText_onb-00')}
        className='mt-24 w-[230px]'
      />

      <div className='mt-12 flex flex-col items-center gap-4'>
        {languages.map((lang) => (
          <ButtonActionFill
            key={lang.code}
            variant='neutral'
            onClick={() => setLanguage(lang.code)}
          >
            {lang.label}
          </ButtonActionFill>
        ))}
      </div>
    </>
  );
};

export default SelectLanguage;
