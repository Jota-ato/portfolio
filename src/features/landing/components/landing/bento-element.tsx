import { cn } from "@/shared/lib/utils"
import { Heading } from "@/shared/typography/heading"
import Image from "next/image"
import type { BentoElementProps } from "@/features/landing/types/landing.types"

export function BentoElement({
    title,
    description,
    image,
    className,
    xAxis = "center",
    yAxis = "center"
}: BentoElementProps
) {
    return (
        <article className={cn(
            "relative rounded-md overflow-hidden",
            className
        )}>
            <Image
                src={image}
                alt={`${title} image`}
                width={400}
                height={400}
                className="size-full object-cover"
            />
            <div className={cn(
                "absolute top-0 left-0 flex flex-col size-full bg-black/50 z-10 p-8 items-center justify-center",
                xAxis === "left" && "items-start",
                xAxis === "right" && "items-end",
                yAxis === "top" && "justify-start",
                yAxis === "bottom" && "justify-end"
            )}>
                <Heading level={3} className="dark:text-foreground text-lg!">{title}</Heading>
                {description && (
                    <p className="dark:text-foreground/80 text-xs md:text-sm mt-2">{description}</p>
                )}
            </div>
        </article>
    )
}