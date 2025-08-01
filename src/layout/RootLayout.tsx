import { ScrollArea } from '@/components/ui/scroll-area';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='flex h-dvh w-dvw justify-center'>
      <ScrollArea className='h-dvh w-[360px]'>
        <Outlet />
      </ScrollArea>
    </div>
  );
};

export default RootLayout;
