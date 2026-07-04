import { cn } from "@/shared/lib/utils"
import { ReactNode } from "react"

export function Container({
    className,
    children
}: {
    className?: string
    children: ReactNode
}) {
  return (
    <div 
        className={cn(
            "w-9/10 max-w-5xl mx-auto",
            className
        )}
    >
      {children}
    </div>
  )
}