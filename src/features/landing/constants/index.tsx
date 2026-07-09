import { ComponentType } from "react";
import { BentoElementProps, ImagePosition, ProjectProps, Tag } from "../types/landing.types";
import { NextJSTag } from "@/shared/components/tags/next-js";
import { Neon } from "@/shared/components/tags/neon";
import { Tailwind } from "@/shared/components/tags/tailwind";

export const imagePositionDictionary: Record<ImagePosition, string> = {
    "bottom": "object-bottom",
    "bottom-left": "object-bottom-left",
    "bottom-right": "object-bottom-right",
    "center": "object-center",
    "left": "object-left",
    "right": "object-right",
    "top": "object-top",
    "top-left": "object-top-left",
    "top-right": "object-top-right"
}

export const bentoElements: BentoElementProps[] = [
    {
        title: "Tailored Software Solutions",
        description: "I build custom web systems, secure databases, and operational dashboards built to save your team hours of manual work.",
        className: "md:col-span-2 row-span-2 bg-secondary",
        image: "/img/bento-1.jpg",
        xAxis: "left",
        yAxis: "bottom",
        imagePosition: "left"
    },
    {
        title: "Modern & Stable Infrastructure",
        className: "lg:col-span-2 bg-secondary",
        imageClassName: "grayscale",
        image: "/img/bento-2.jpg",
        xAxis: "right"
    },
    {
        title: "US & Canada Time Zone Aligned",
        image: "/img/bento-3.jpg",
        yAxis: "bottom",
    },
    {
        title: "Workflow Automation",
        description: "Eliminate human error by connecting your existing business tools to automate data entry and internal scheduling.",
        className: "lg:row-span-2 row-span-2 md:row-span-1 bg-secondary",
        imageClassName: "grayscale",
        image: "/img/bento-4.jpg",
        yAxis: "top"
    },
    {
        title: "100% Ownership",
        description: "Zero Monthly Software Subscriptions.",
        className: "md:row-span-2 lg:row-span-1 md:col-span-2 lg:col-span-1",
        image: "/img/bento-5.jpg",
        yAxis: "top",
        xAxis: "left"
    },
    {
        title: "Agile Deployment (Weeks, Not Months)",
        className: "lg:col-span-2",
        image: "/img/bento-6.png",
        xAxis: "left",
    },
]

export const tagsDictionary: Record<Tag, ComponentType> = {
    "nextjs": NextJSTag,
    "neon": Neon,
    "tailwind": Tailwind
}

export const projects: ProjectProps[] = [
    {
        title: "Manita de Gato",
        description: "A custom booking engine and dashboard that eliminates manual scheduling conflicts. It gives business owners complete control over services and pricing with zero recurring platform fees.",
        image: "/img/manita-de-gato.png",
        liveUrl: "https://booking-system-flame-eight.vercel.app/",
        githubUrl: "https://github.com/Jota-ato/manita-de-gato",
        technologies: [
            "nextjs",
            "neon",
            "tailwind"
        ]
    },
    {
        title: "Paar",
        description: "A custom booking engine and dashboard that eliminates manual scheduling conflicts. It gives business owners complete control over services and pricing with zero recurring platform fees.",
        image: "/img/manita-de-gato.png",
        liveUrl: "https://paar-nu.vercel.app",
        githubUrl: "https://github.com/Jota-ato/paar",
        technologies: [
            "nextjs",
            "neon",
            "tailwind"
        ]
    },
    {
        title: "Jose Maria's Gallery",
        description: "A custom booking engine and dashboard that eliminates manual scheduling conflicts. It gives business owners complete control over services and pricing with zero recurring platform fees.",
        image: "/img/manita-de-gato.png",
        liveUrl: "https://julio-zavala.me",
        githubUrl: "https://github.com/Jota-ato/paar",
        technologies: [
            "nextjs",
            "neon",
            "tailwind"
        ]
    },
]