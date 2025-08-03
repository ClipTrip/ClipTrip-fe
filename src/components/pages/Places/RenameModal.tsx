import ButtonActionFill from '@/components/common/ButtonActionFill';
import TextField from '@/components/common/TextField';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface RenameModalProps {
  defaultName: string;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}

const RenameModal = ({ defaultName, open, onOpenChange }: RenameModalProps) => {
  const { t } = useTranslation(['buttonAction', 'textField']);
  const [name, setName] = useState(defaultName);

  const handleClose = () => {
    onOpenChange?.(false);
  };

  const handleSubmit = () => {
    onOpenChange?.(false);
  };

  useEffect(() => {
    setName(defaultName);
  }, [defaultName]);

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className='rounded-020 pt-024 pb-016 gap-024 flex w-[314px] flex-col px-0'>
        <VisuallyHidden>
          <AlertDialogHeader>
            <AlertDialogTitle>Rename Modal</AlertDialogTitle>
            <AlertDialogDescription>Rename Place List</AlertDialogDescription>
          </AlertDialogHeader>
        </VisuallyHidden>

        <TextField
          className='px-024'
          placeholder={t('textField:textField_likesList')}
          checkText={t('textField:textField_checkID')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onIconClick={() => setName('')}
        />

        <div className='gap-008 flex justify-center'>
          <ButtonActionFill
            variant='neutral'
            className='w-32'
            onClick={handleClose}
          >
            {t('button-action_cancel')}
          </ButtonActionFill>
          <ButtonActionFill
            className='w-32'
            variant='primary'
            disabled={!name}
            onClick={handleSubmit}
          >
            {t('button-action_ok')}
          </ButtonActionFill>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RenameModal;
