import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {cn} from "@/lib/utils.ts";
import { cva, type VariantProps } from 'class-variance-authority';
import {useTranslation} from "react-i18next";
import type {ReactNode} from "react";

const actionButtonVariants = cva(
    "bg-sy_container-neutral-normal text-sy_label-alternative border-none w-[128px] h-12",
    {
        variants:{
            variant: {
                normal:
                    'bg-sy_container-primary-normal text-sy_label-white',
                delete:
                    'bg-sy_status-negative-normal text-sy_label-white hover:bg-sy_status-negative-normal'
            },
        },
    }
)

interface DialogProps {
    title: string;
    description?: string;
    trigger? :ReactNode;
    actionButtonText: string;
    onClickActionButton?: () => void;
}

const Dialog = ({
                    title,
                    description,
                    trigger,
                    onClickActionButton,
                    variant,
                    actionButtonText
}:DialogProps & VariantProps<typeof actionButtonVariants>
) => {
    const {t} = useTranslation(["buttonAction"])

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {trigger}
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[312px] rounded-020">
                <AlertDialogHeader>
                    <AlertDialogTitle className="body_l-prominent">{title}</AlertDialogTitle>
                    <AlertDialogDescription className="body_l text-sy_label-light">
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={cn(actionButtonVariants())}>{t("button-action_cancel")}</AlertDialogCancel>
                    <AlertDialogAction className={cn(actionButtonVariants({variant}))} onClick={onClickActionButton}>{actionButtonText}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Dialog;