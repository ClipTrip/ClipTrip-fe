import ButtonIcon from '@/components/common/ButtonIcon';
import FullPageLoading from '@/components/common/FullPageLoading';
import SearchIcon from '@/components/icons/system/SearchIcon';
import { cn } from '@/lib/utils';
import type { InputHTMLAttributes, RefObject } from 'react';
import { useTranslation } from 'react-i18next';

interface PlaceSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
  isPending?: boolean;
  ref: RefObject<HTMLInputElement | null>;
}

const PlaceSearch = ({
  className,
  isPending,
  onSearch,
  ref,
  ...props
}: PlaceSearchProps) => {
  const { t } = useTranslation('searchField');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.();
  };

  return (
    <>
      {isPending && <FullPageLoading />}
      <form
        onSubmit={handleSubmit}
        className='bg-sy_container-neutral-white rounded-010 relative h-fit w-[312px]'
      >
        <input
          placeholder={t('searchField')}
          data-slot='search'
          className={cn(
            'body_l placeholder:label_m placeholder:text-sy_label-light px-020 py-016 rounded-020 text-sy_label-normal h-14 w-full pr-12 outline-none',
            className
          )}
          ref={ref}
          {...props}
        />

        <ButtonIcon
          className='[&>svg]:text-sy_icon-neutral-light absolute right-5 top-4 h-6 w-6 cursor-pointer'
          Icon={SearchIcon}
          disabled={isPending}
        />
      </form>
    </>
  );
};

export default PlaceSearch;
