import ButtonIcon from '@/components/common/ButtonIcon';
import CancelIcon from '@/components/icons/system/CancelIcon';
import { cn } from '@/lib/utils';
import { useState, type ElementType } from 'react';

interface TextFieldProps {
  supportingText?: string;
  onIconClick?: () => void;
  Icon?: ElementType;
  isError?: boolean;
  checkText?: string;
  onCheckClick?: () => void;
}

const TextField = ({
  supportingText,
  Icon = CancelIcon,
  onIconClick,
  isError,
  className,
  type,
  checkText,
  onCheckClick,
  ...props
}: TextFieldProps & React.ComponentProps<'input'>) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={cn(
        'bg-sy_container-neutral-normal rounded-020 h-fit w-[312px]',
        className
      )}
    >
      <div className='relative'>
        <input
          type={type}
          data-slot='input'
          className={cn(
            'placeholder:label_m placeholder:text-sy_label-light p-012 rounded-020 text-sy_label-normal label_m h-14 w-full outline-none',
            'focus:border-sy_line-super focus:border',
            isError
              && 'border-sy_status-negative-normal focus:border-sy_status-negative-normal border',
            checkText && 'pr-[70px]',
            focused && 'pr-12',
            checkText && focused && 'pr-[100px]'
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {focused && (
          <ButtonIcon
            type='button'
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-transparent active:bg-transparent'
            Icon={Icon}
            onClick={onIconClick}
          />
        )}
        {checkText && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={onCheckClick}
            className={cn(
              'label_m text-sy_label-light absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer',
              focused && 'right-12'
            )}
          >
            {checkText}
          </button>
        )}
      </div>
      {supportingText && (
        <p
          className={cn(
            'pt-004 px-012 body_s text-sy_label-light h-[22px] w-full',
            isError && 'text-sy_status-negative-normal'
          )}
        >
          {supportingText}
        </p>
      )}
    </div>
  );
};

export default TextField;
