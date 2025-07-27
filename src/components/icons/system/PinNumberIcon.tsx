import { cn } from "@/lib/utils";

interface SystemIconProps {
  className?: string;
  number: number;
}

const PinNumberIcon = ({ number, className }: SystemIconProps) => {
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
        d="M11.9995 1.93799C17.5568 1.93799 22.062 6.44324 22.062 12.0005C22.0618 17.5576 17.5566 22.062 11.9995 22.062C6.44258 22.0618 1.93819 17.5574 1.93799 12.0005C1.93799 6.44338 6.44246 1.93822 11.9995 1.93799Z"
        fill="currentColor"
      />
      <circle cx="12.0005" cy="11.9155" r="8" fill="currentColor" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="white"
        fontSize="12px"
        fontFamily="Pretendard"
        fontWeight="700"
        letterSpacing="-0.3"
        dominantBaseline="middle"
        dy="0.5"
      >
        {number}
      </text>
    </svg>
  );
};

export default PinNumberIcon;
