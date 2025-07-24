import {type PropsWithChildren, type ReactNode} from "react";
import {
    Drawer,
    DrawerClose,
    DrawerHeader,
    DrawerTitle,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"
import CloseIcon from "@/components/icons/system/CloseIcon.tsx";

interface DrawerProps {
    trigger : ReactNode
}

const Drawers = ({trigger, children}: PropsWithChildren<DrawerProps>) => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                {trigger}
            </DrawerTrigger>
            <DrawerHeader>
                <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <DrawerContent className="fixed bottom-4 inset-x-0 mx-auto max-w-[360px] w-full [&>div:first-child]:hidden rounded-t-030 !rounded-t-030 overflow-visible">
                <div className="pl-024 pr-024">
                    <DrawerFooter className="w-full flex items-end p-0">
                        <DrawerClose asChild>
                            <button className="p-012 pr-0 mt-[8px]">
                                <CloseIcon/>
                            </button>
                        </DrawerClose>
                    </DrawerFooter>
                    {children}
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default Drawers;