import FullPageLoading from '@/components/common/FullPageLoading';
import CheckCircleIcon from '@/components/icons/system/CheckCircleIcon';
import { useDeleteBookmarkPlace } from '@/hooks/useBookmark';
import type { ApiFailResponse } from '@/types/api';
import type {
  AddBookmarkProps,
  CreateBookmarkResponse,
} from '@/types/bookmarks';
import type { UseMutateAsyncFunction } from '@tanstack/react-query';
import { useState } from 'react';

interface CheckButtonProps {
  bookmarkId: AddBookmarkProps['bookmarkId'];
  data: AddBookmarkProps['data'];
  defaultCheck?: boolean;
  placeId?: number;
  kakaoPlaceId?: string;
  isPending: boolean;
  mutateAsync: UseMutateAsyncFunction<
    CreateBookmarkResponse,
    ApiFailResponse,
    AddBookmarkProps,
    AddBookmarkProps
  >;
}

const CheckButton = ({
  bookmarkId,
  data,
  defaultCheck = false,
  placeId,
  kakaoPlaceId,
  isPending,
  mutateAsync,
}: CheckButtonProps) => {
  const [checked, setChecked] = useState(defaultCheck);

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
    <>
      {isPending && <FullPageLoading className='bg-black/0' />}
      <button
        onClick={handleClick}
        className='flex size-12 items-center justify-center'
      >
        <CheckCircleIcon
          className='size-6'
          isActive={checked}
        />
      </button>
    </>
  );
};

export default CheckButton;
