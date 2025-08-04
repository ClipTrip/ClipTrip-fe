import CheckCircleIcon from '@/components/icons/system/CheckCircleIcon';
import { useAddBookmark } from '@/hooks/useBookmark';
import type { AddBookmarkProps } from '@/types/bookmarks';
import { useState } from 'react';

interface CheckButtonProps {
  bookmarkId: AddBookmarkProps['bookmarkId'];
  data: AddBookmarkProps['data'];
}

const CheckButton = ({ bookmarkId, data }: CheckButtonProps) => {
  const [checked, setChecked] = useState(false);
  const { mutateAsync, isPending } = useAddBookmark();

  const handleClick = async () => {
    if (isPending || checked) return null;
    setChecked((pre) => !pre);
    await mutateAsync({ bookmarkId, data });
  };

  return (
    <button
      onClick={handleClick}
      className='flex size-12 items-center justify-center'
    >
      <CheckCircleIcon
        className='size-6'
        isActive={checked}
      />
    </button>
  );
};

export default CheckButton;
