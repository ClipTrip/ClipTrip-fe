import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
  isActive?: boolean;
}

const SaveIcon = ({ className, isActive }: SystemIconProps) => {
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
        d="M11.0727 2.55905C11.466 1.81349 12.5338 1.81349 12.9272 2.55905L15.3017 7.05959C15.4534 7.34711 15.7299 7.54799 16.0502 7.60341L21.0642 8.47096C21.8948 8.61468 22.2248 9.63019 21.6373 10.2347L18.0908 13.8837C17.8642 14.1169 17.7586 14.4419 17.8049 14.7637L18.5292 19.8004C18.6492 20.6348 17.7854 21.2624 17.0289 20.8904L12.4625 18.6451C12.1708 18.5017 11.829 18.5017 11.5373 18.6451L6.97094 20.8904C6.21447 21.2624 5.35063 20.6348 5.47062 19.8004L6.19495 14.7637C6.24123 14.4419 6.13562 14.1169 5.90905 13.8837L2.36254 10.2347C1.77503 9.63019 2.10499 8.61468 2.93561 8.47096L7.94965 7.60341C8.26997 7.54799 8.54646 7.34711 8.69815 7.05959L11.0727 2.55905Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SaveIcon;
