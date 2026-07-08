
export type XAxis = "left" | "center" | "right"
export type YAxis = "top" | "center" | "bottom"

export type BentoElementProps = {
    title: string
    description?: string
    image: string
    className?: string
    xAxis?: XAxis
    yAxis?: YAxis
}