import { cn } from "@/lib/utils";

interface HeadlineProps {
  title: string;
  description?: string;
  textAlign?: "center" | "left";
  className?: string;
}

const Headline = ({ title, description, textAlign = "center", className }: HeadlineProps) => {
  return (
    <div className={cn("flex flex-col gap-012 px-024", textAlign === "center" && "items-center")}>
      <h1
        className={cn(
          "display_l text-sy_label-strong",
          textAlign === "center" && "text-center",
          textAlign === "left" && "text-left",
          className
        )}
      >
        {title}
      </h1>
      {description && (
        <h2
          className={cn(
            "title_s-prominent text-sy_label-light",
            textAlign === "center" && "text-center",
            textAlign === "left" && "text-left"
          )}
        >
          {description}
        </h2>
      )}
    </div>
  );
};

export default Headline;
