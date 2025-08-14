import { cn } from "@/lib/utils"

/**
 * Renders a pulsing rounded div used as a skeleton/loading placeholder.
 *
 * Merges the base classes ("bg-accent animate-pulse rounded-md") with an optional `className`,
 * forwards all other props to the underlying div, and sets `data-slot="skeleton"`.
 *
 * @returns A div element serving as a skeleton placeholder.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
