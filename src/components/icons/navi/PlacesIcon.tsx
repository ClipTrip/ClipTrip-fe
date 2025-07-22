import { cn } from "@/lib/utils";

interface NaviIconProps {
  className?: string;
  isActive?: boolean;
}

const PlacesIcon = ({ className, isActive }: NaviIconProps) => {
  return (
    <svg
      className={cn(
        "text-sy_icon-neutral-light",
        isActive && "text-sy_icon-neutral-normal",
        className
      )}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0727 3.05905C11.466 2.31349 12.5338 2.31349 12.9272 3.05905L15.3017 7.55959C15.4534 7.84711 15.7299 8.04799 16.0502 8.10341L21.0642 8.97096C21.8948 9.11468 22.2248 10.1302 21.6373 10.7347L18.0908 14.3837C17.8642 14.6169 17.7586 14.9419 17.8049 15.2637L18.5292 20.3004C18.6492 21.1348 17.7853 21.7624 17.0289 21.3904L12.4625 19.1451C12.1708 19.0017 11.829 19.0017 11.5373 19.1451L6.97093 21.3904C6.21446 21.7624 5.35062 21.1348 5.47061 20.3004L6.19494 15.2637C6.24122 14.9419 6.13561 14.6169 5.90904 14.3837L2.36254 10.7347C1.77502 10.1302 2.10498 9.11468 2.93561 8.97096L7.94964 8.10341C8.26996 8.04799 8.54645 7.84711 8.69815 7.55959L11.0727 3.05905Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlacesIcon;
