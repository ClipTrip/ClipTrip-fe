import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-dvw h-dvh flex justify-center">
      <ScrollArea className="w-[360px] h-dvh ">
        <Outlet />
      </ScrollArea>
    </div>
  );
};

export default RootLayout;
