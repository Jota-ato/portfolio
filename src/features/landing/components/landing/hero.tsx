import { Heading } from "@/shared/typography/heading";
import Image from "next/image";
import { Container } from "../../../../shared/components/ui/container";
import { Button } from "../../../../shared/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <Container>
            <main className="flex justify-center items-center gap-4 my-4 md:my-8 min-h-[90vh]">
                <div className="space-y-4 text-center">
                    <Heading className="text-center">
                        Custom Software & Automation for SMBs
                    </Heading>
                    <Heading level={2} className="font-bold text-primary text-center">
                        Julio Zavala - Full Stack Developer
                    </Heading>
                    <p className="max-w-2xl text-md md:text-lg text-foreground/80 mx-auto">
                        I build high-performance web systems, boost your productivity, and streamline your operations.
                        <span className="text-foreground"> Zero generic templates. Just tailored software engineered to optimize your operations.</span>
                    </p>
                    <Button
                        size="lg"
                        className="mx-auto flex items-center"
                    >
                        <a
                            className="flex items-center "
                            href="mailto:juliozavala@julio-zavala.me"
                            target="_blank"
                        >
                            Contact me
                            <ArrowUpRight className="size-4" />
                        </a>
                    </Button>
                </div>
            </main>
        </Container>
    )
}