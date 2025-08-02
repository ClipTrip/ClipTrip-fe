import ButtonIcon from '@/components/common/ButtonIcon';
import SearchIcon from '@/components/icons/system/SearchIcon';
import VideosLoading from '@/components/pages/Home/VideosLoading';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface SearchFieldProps {
  onSearch?: (url: string) => void;
  isPending?: boolean;
}

const SearchField = ({ onSearch, isPending }: SearchFieldProps) => {
  const { t } = useTranslation('searchField');
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current?.value) onSearch?.(searchRef.current?.value);
  };

  return (
    <>
      {isPending && <VideosLoading />}
      <form
        onSubmit={handleSubmit}
        className='bg-sy_container-neutral-white rounded-010 relative h-fit w-[312px]'
      >
        <input
          placeholder={t('searchField')}
          data-slot='search'
          className='body_l placeholder:label_m placeholder:text-sy_label-light px-016 py-012 rounded-016 text-sy_label-normal h-12 w-full pr-11 outline-none'
          ref={searchRef}
        />

        <ButtonIcon
          className='[&>svg]:text-sy_icon-neutral-light absolute right-4 top-3 h-6 w-6 cursor-pointer'
          Icon={SearchIcon}
          disabled={isPending}
        />
      </form>
    </>
  );
};

export default SearchField;
