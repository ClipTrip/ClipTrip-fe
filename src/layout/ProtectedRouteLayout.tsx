import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuthentication } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouteLayout = () => {
  const { error, isPending } = useAuthentication();

  if (isPending) {
    return null;
  }

  if (error)
    return (
      <Navigate
        to='/onboarding'
        replace
      />
    );

  return (
    <div className='flex h-dvh w-dvw justify-center'>
      <ScrollArea
        className='h-dvh w-[360px]'
        id='navigation-root'
      >
        <Outlet />
      </ScrollArea>
    </div>
  );
};

export default ProtectedRouteLayout;
