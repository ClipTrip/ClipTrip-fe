import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthentication } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteLayout = () => {
  const { error, isPending } = useAuthentication();

  if (isPending) {
    return null;
  }

  if (error) return <Navigate to="/login" replace />;

  return (
    <div className="w-dvw h-dvh flex justify-center">
      <ScrollArea className="w-[360px] h-dvh ">
        <Outlet />
      </ScrollArea>
    </div>
  );
};

export default ProtectedRouteLayout;
