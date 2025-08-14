import ButtonActionFill from '@/components/common/ButtonActionFill';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Calendar as CalendarBase } from '@/components/ui/calendar';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { type DateRange } from 'react-day-picker';
import { useTranslation } from 'react-i18next';
import { es, ko } from 'react-day-picker/locale';

interface CalendarProps {
  open: boolean;
  range?: DateRange;
  onOpenChange?: (open: boolean) => void;
  onRange: (value: DateRange | undefined) => void;
}

const Calendar = ({ open, range, onRange, onOpenChange }: CalendarProps) => {
  const { t, i18n } = useTranslation(['buttonAction', 'calendar']);

  const handleClose = () => {
    onOpenChange?.(false);
  };

  const handleSubmit = () => {
    onOpenChange?.(false);
  };

  const language = i18n.language === 'en' ? es : ko;

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className='rounded-010 p-016 pt-020 gap-012 flex w-[312px] flex-col'>
        <AlertDialogHeader>
          <AlertDialogTitle className='title_m-prominent text-sy_label-normal'>
            {t('calendar:calendar-title')}
          </AlertDialogTitle>
          <VisuallyHidden>
            <AlertDialogDescription>Choose Schedule</AlertDialogDescription>
          </VisuallyHidden>
        </AlertDialogHeader>

        <CalendarBase
          mode='range'
          selected={range}
          onSelect={onRange}
          classNames={{}}
          className='w-full p-0'
          locale={language}
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
            onClick={handleSubmit}
          >
            {t('button-action_next')}
          </ButtonActionFill>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Calendar;
