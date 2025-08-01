import { type PropsWithChildren, type ReactNode } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import CloseIcon from '@/components/icons/system/CloseIcon.tsx';

interface DrawerProps {
  trigger: ReactNode;
}

const Drawers = ({ trigger, children }: PropsWithChildren<DrawerProps>) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className='rounded-t-030 !rounded-t-030 fixed inset-x-0 bottom-4 mx-auto w-full max-w-[360px] overflow-visible [&>div:first-child]:hidden'>
        <div className='pl-024 pr-024'>
          <DrawerHeader className='flex w-full items-end p-0'>
            <DrawerTitle></DrawerTitle>
            <DrawerClose asChild>
              <button className='p-012 mt-[8px] cursor-pointer pr-0'>
                <CloseIcon />
              </button>
            </DrawerClose>
          </DrawerHeader>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Drawers;
