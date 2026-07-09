import { ReactNode } from "react"

export type XAxis = "left" | "center" | "right"
export type YAxis = "top" | "center" | "bottom"
export type ImagePosition = "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"
export type Tag = "nextjs" | "neon" | "tailwind"

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

export type ProjectProps = {
    title: string
    description: string
    image: string
    liveUrl: string
    githubUrl: string
    technologies: Tag[]
    imagePosition?: ImagePosition
}