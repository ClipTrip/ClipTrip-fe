import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "w-[312px] h-12 flex justify-center items-center label_l rounded-010 cursor-pointer disabled:cursor-default",
  {
    variants: {
      variant: {
        primary:
          "bg-sy_container-primary-normal text-sy_label-white active:bg-sy_container-primary-strong disabled:bg-sy_container-primary-light disabled:text-sy_label-alternative",
        neutral:
          "bg-sy_container-neutral-normal text-sy_label-alternative active:bg-sy_container-neutral-strong disabled:bg-sy_container-neutral-normal disabled:text-sy_label-light",
        negative:
          "bg-sy_status-negative-normal text-sy_label-white active:bg-sy_status-negative-strong disabled:bg-sy_container-neutral-normal disabled:text-sy_label-light"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

interface ButtonActionFillProps {
  asChild?: boolean;
}

const ButtonActionFill = ({
  variant,
  asChild = false,
  className,
  ...props
}: ButtonActionFillProps &
  React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) => {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <Comp data-slot="button" className={cn(buttonVariants({ variant, className }))} {...props} />
    </>
  );
};

export default ButtonActionFill;
