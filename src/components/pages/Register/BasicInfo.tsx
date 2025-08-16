import TextField from '@/components/common/TextField.tsx';
import ButtonActionFill from '@/components/common/ButtonActionFill.tsx';
import { useTranslation } from 'react-i18next';

interface BasicInfoProps {
  emailValue: string;
  passwordValue: string;
  onChangeValue: (type: string, value: string) => void;
  handleNextButton?: () => void;
}

const BasicInfo = ({
  emailValue,
  passwordValue,
  onChangeValue,
  handleNextButton,
}: BasicInfoProps) => {
  const { t } = useTranslation(['textField', 'buttonAction']);

  return (
    <form className='mt-6 flex flex-col items-center gap-8'>
      <TextField
        type='email'
        placeholder={t('textField:textField_signUp-id')}
        value={emailValue}
        onChange={(event) => onChangeValue('email', event.target.value)}
      />
      <TextField
        type='password'
        placeholder={t('textField:textField_signUp-password')}
        value={passwordValue}
        onChange={(event) => onChangeValue('password', event.target.value)}
      />
      <ButtonActionFill
        variant='primary'
        className='mt-[18px]'
        onClick={handleNextButton}
      >
        {t('buttonAction:button-action_next')}
      </ButtonActionFill>
    </form>
  );
};

export default BasicInfo;
