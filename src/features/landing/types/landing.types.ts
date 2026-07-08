
export type XAxis = "left" | "center" | "right"
export type YAxis = "top" | "center" | "bottom"
type ImagePosition = "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"

export type BentoElementProps = {
    title: string
    description?: string
    image: string
    className?: string
    imageClassName?: string
    xAxis?: XAxis
    yAxis?: YAxis
    imagePosition?: ImagePosition
}