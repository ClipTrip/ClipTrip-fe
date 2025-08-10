import CheckCircleIcon from '@/components/icons/system/CheckCircleIcon';
import { useAddBookmark, useDeleteBookmarkPlace } from '@/hooks/useBookmark';
import type { AddBookmarkProps } from '@/types/bookmarks';
import { useState } from 'react';

interface CheckButtonProps {
  bookmarkId: AddBookmarkProps['bookmarkId'];
  data: AddBookmarkProps['data'];
  defaultCheck?: boolean;
  placeId?: number;
  kakaoPlaceId?: string;
}

const CheckButton = ({
  bookmarkId,
  data,
  defaultCheck = false,
  placeId,
  kakaoPlaceId,
}: CheckButtonProps) => {
  const [checked, setChecked] = useState(defaultCheck);
  const { mutateAsync, isPending } = useAddBookmark();
  const { mutateAsync: deleteMutate, isPending: deleteIsPending } =
    useDeleteBookmarkPlace();

  const handleClick = async () => {
    if (isPending || deleteIsPending) return null;
    if (!checked) await mutateAsync({ bookmarkId, data });
    if (checked && (placeId || kakaoPlaceId))
      await deleteMutate({ bookmarkId, placeId, kakaoPlaceId });
    setChecked((pre) => !pre);
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
