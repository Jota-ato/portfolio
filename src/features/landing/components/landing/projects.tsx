import { Heading } from "@/shared/typography/heading";
import { Container } from "@/shared/components/ui/container";
import Image from "next/image";
import { NextJSTag } from "@/shared/components/tags/next-js";
import { Neon } from "@/shared/components/tags/neon";
import { Tailwind } from "@/shared/components/tags/tailwind";
import { Button } from "@/shared/components/ui/button";
import { ArrowUpRight, SquareArrowRight, SquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export function ProjectsSection() {
    return (
        <section className="py-8 md:py-12 min-h-screen bg-secondary text-secondary-foreground">
            <Container className="space-y-8">
                <Heading level={2}>My work</Heading>
                <article className="flex flex-col sm:flex-row gap-4">
                    <div className="rounded-md overflow-hidden" style={{ flexBasis: "50%" }}>
                        <Image
                            src="/img/manita-de-gato.png"
                            alt="Project 1"
                            width={500}
                            height={300}
                            className="aspect-video object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex-1">
                        <Heading className="text-2xl! sm:text-3xl!" level={4}>Manita de Gato</Heading>
                        <div className="flex gap-2 mt-2 mb-4">
                            <NextJSTag />
                            <Neon />
                            <Tailwind />
                        </div>
                        <p className="sm:text-lg max-w-md text-secondary-foreground/80">
                            A custom booking engine and dashboard that eliminates manual scheduling conflicts.
                            It gives business owners complete control over services and pricing with zero recurring platform fees.
                        </p>

                        <div className="flex items-center justify-start gap-4 mt-4">
                            <Button
                                size={"lg"}
                                variant="outline"
                                className="rounded-sm text-md sm:text-lg"
                                asChild
                            >
                                <Link
                                    className="flex items-center gap-2"
                                    href={"https://booking-system-flame-eight.vercel.app/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SquareArrowUpRight className="size-5" />
                                    View live
                                </Link>
                            </Button>
                            <Button
                                size={"lg"}
                                variant="outline"
                                className="rounded-sm text-md sm:text-lg"
                                asChild
                            >
                                <Link
                                    className="flex items-center gap-2"
                                    href={"https://booking-system-flame-eight.vercel.app/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsGithub className="size-5" />
                                    Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                </article>
            </Container>
        </section>
    )
}