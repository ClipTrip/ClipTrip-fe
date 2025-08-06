import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuthentication } from '@/hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRouteLayout = () => {
  const { data, isPending, isError } = useAuthentication();
  const location = useLocation();
  const currentPath = location.pathname + location.search;

  if (isPending) {
    return null;
  }

  if (isError || !data.data.isTokenVerified)
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(currentPath)}`}
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
