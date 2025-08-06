import ButtonActionFill from '@/components/common/ButtonActionFill';
import TextField from '@/components/common/TextField';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useCreateBookmark, usePatchBookmark } from '@/hooks/useBookmark';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface AddRenameModalProps {
  defaultName: string;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  mode?: 'add' | 'rename';
  bookmarkId?: number;
}

const AddRenameModal = ({
  defaultName,
  open,
  mode = 'rename',
  bookmarkId,
  onOpenChange,
}: AddRenameModalProps) => {
  const { t } = useTranslation(['buttonAction', 'textField']);
  const [name, setName] = useState(defaultName);
  const { mutateAsync, isPending } = useCreateBookmark();
  const { mutateAsync: patchMutate, isPending: isPatchPending } =
    usePatchBookmark();

  const handleCreateBookmark = async () => {
    if (isPending) return null;

    await mutateAsync({
      bookmarkName: name,
      description: '',
    });
  };

  const handlePatchBookmark = async () => {
    if (isPatchPending || !bookmarkId) return null;

    await patchMutate({ bookmarkId, data: { bookmarkName: name } });
  };

  const handleClose = () => {
    onOpenChange?.(false);
  };

  const handleSubmit = () => {
    onOpenChange?.(false);
    if (mode === 'add') handleCreateBookmark();
    if (mode === 'rename') handlePatchBookmark();
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

export default AddRenameModal;
