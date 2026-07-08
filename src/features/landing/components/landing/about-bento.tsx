import { Container } from "@/shared/components/ui/container";
import { BentoElementProps } from "../../types/landing.types";
import { BentoElement } from "./bento-element";

const bentoElements: BentoElementProps[] = [
    {
        title: "Tailored Software Solutions",
        description: "I build custom web systems, secure databases, and operational dashboards built to save your team hours of manual work.",
        className: "md:col-span-2 row-span-2 bg-secondary",
        image: "/img/default-bento-image.avif",
        xAxis: "left",
        yAxis: "bottom"
    },
    {
        title: "Modern & Stable Infrastructure",
        className: "lg:col-span-2 bg-secondary",
        image: "/img/default-bento-image.avif",
        xAxis: "right"
    },
    {
        title: "US & Canada Time Zone Aligned",
        image: "/img/default-bento-image.avif",
    },
    {
        title: "Workflow Automation",
        description: "Eliminate human error by connecting your existing business tools to automate data entry and internal scheduling.",
        className: "lg:row-span-2 row-span-2 md:row-span-1 bg-secondary",
        image: "/img/default-bento-image.avif",
        yAxis: "top"
    },
    {
        title: "100% Ownership. Zero Monthly Software Subscriptions.",
        className: "md:row-span-2 lg:row-span-1 md:col-span-2 lg:col-span-1",
        image: "/img/default-bento-image.avif",
    },
    {
        title: "Agile Deployment (Weeks, Not Months)",
        className: "lg:col-span-2",
        image: "/img/default-bento-image.avif",
        xAxis: "left",
    },
]

export function AboutBento() {
    return (
        <section className="py-8 md:py-12">
            <Container className="grid grid-cols-1 grid-rows-7 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 aspect-1/7 md:aspect-3/4 lg:aspect-4/3 gap-4 text-secondary-foreground">
                {bentoElements.map(element => (
                    <BentoElement
                        key={element.title}
                        {...element}
                    />
                ))}
            </Container>
        </section>
    )
}