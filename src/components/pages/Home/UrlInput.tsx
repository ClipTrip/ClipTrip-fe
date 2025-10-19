import ButtonIcon from '@/components/common/ButtonIcon';
import ArrowUpIcon from '@/components/icons/system/ArrowUpIcon';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface UrlInputProps {
  onSearch: (url: string) => void;
  isPending: boolean;
}

const UrlInput = ({ onSearch, isPending }: UrlInputProps) => {
  const { t } = useTranslation('textField');
  const urlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (urlRef.current?.value) onSearch(urlRef.current?.value);
  };

  return (
    <>
      <div className='bg-sy_container-neutral-normal rounded-016 h-fit w-[312px]'>
        <form
          onSubmit={handleSubmit}
          className='relative'
        >
          <input
            placeholder={t('textField_url')}
            data-slot='input'
            className={cn(
              'placeholder:label_m placeholder:text-sy_label-light p-012 rounded-016 text-sy_label-normal label_m h-14 w-full pr-14 outline-none',
              'focus:border-sy_line-super focus:border'
            )}
            ref={urlRef}
          />

          <ButtonIcon
            className='rounded-016 bg-neutral-10 active:bg-neutral-10 [&>svg]:text-sy_icon-neutral-white absolute right-1 top-1'
            Icon={ArrowUpIcon}
            disabled={isPending}
          />
        </form>
      </div>
    </>
  );
};

export default UrlInput;
