import ButtonIcon from '@/components/common/ButtonIcon';
import CancelIcon from '@/components/icons/system/CancelIcon';
import { cn } from '@/lib/utils';
import { useState, type ElementType } from 'react';

interface TextFieldProps {
  supportingText?: string;
  onIconClick?: () => void;
  Icon?: ElementType;
  isError?: boolean;
}

const TextField = ({
  supportingText,
  Icon = CancelIcon,
  onIconClick,
  isError,
  className,
  type,
  ...props
}: TextFieldProps & React.ComponentProps<'input'>) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className='bg-sy_container-neutral-normal h-fit w-[312px]'>
      <div className='relative'>
        <input
          type={type}
          data-slot='input'
          className={cn(
            'placeholder:label_m placeholder:text-sy_label-light p-012 rounded-010 text-sy_label-normal label_m h-12 w-full pr-12 outline-none',
            'focus:border-sy_line-super focus:border',
            isError
              && 'border-sy_status-negative-normal focus:border-sy_status-negative-normal border',
            className
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {focused && (
          <ButtonIcon
            type='button'
            className='absolute right-0 top-0 bg-transparent active:bg-transparent'
            Icon={Icon}
            onClick={onIconClick}
          />
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
