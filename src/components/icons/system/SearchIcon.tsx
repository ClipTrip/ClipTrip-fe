import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
}

const SearchIcon = ({ className }: SystemIconProps) => {
  return (
    <svg
      className={cn("text-sy_icon-neutral-normal", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7148 3C14.9757 3 18.4305 6.45403 18.4307 10.7148L18.4199 11.1123C18.338 12.7282 17.7565 14.2113 16.8301 15.415L20.2939 18.8789C20.6842 19.2694 20.6843 19.9025 20.2939 20.293C19.9035 20.6834 19.2704 20.6832 18.8799 20.293L15.416 16.8301C14.1142 17.8325 12.4849 18.4307 10.7148 18.4307L10.3184 18.4199C6.24181 18.2134 3 14.8427 3 10.7148C3.00014 6.45411 6.45411 3.00014 10.7148 3ZM10.7148 5C7.55868 5.00014 5.00014 7.55868 5 10.7148C5 13.8711 7.5586 16.4305 10.7148 16.4307C13.8712 16.4307 16.4307 13.8712 16.4307 10.7148C16.4305 7.5586 13.8711 5 10.7148 5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SearchIcon;
