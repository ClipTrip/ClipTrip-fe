import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const HomePageIcon = ({ className }: SystemIconProps) => {
  return (
    <svg
      className={cn("text-sy_icon-neutral-light", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 16.75C18.75 17.8545 17.8545 18.7499 16.75 18.75H7.25C6.14543 18.75 5.25 17.8546 5.25 16.75V10.75H18.75V16.75ZM16.75 5.25C17.8545 5.25013 18.75 6.14551 18.75 7.25V9.25H5.25V7.25C5.25 6.14543 6.14543 5.25 7.25 5.25H16.75ZM13.25 6.25C12.6977 6.25 12.25 6.69772 12.25 7.25C12.25 7.80228 12.6977 8.25 13.25 8.25C13.8023 8.25 14.25 7.80228 14.25 7.25C14.25 6.69772 13.8023 6.25 13.25 6.25ZM16.25 6.25C15.6977 6.25 15.25 6.69772 15.25 7.25C15.25 7.80228 15.6977 8.25 16.25 8.25C16.8023 8.25 17.25 7.80228 17.25 7.25C17.25 6.69772 16.8023 6.25 16.25 6.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HomePageIcon;
