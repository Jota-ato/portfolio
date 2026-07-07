import { Heading } from "@/shared/typography/heading";
import Image from "next/image";
import { Container } from "../ui/container";

export function Hero() {
    return (
        <Container>
            <main className="flex justify-center items-center gap-4 my-4 md:my-8 min-h-[90vh]">
                <div className="space-y-4 text-center">
                    <Heading className="text-center">
                        Custom Software & Automation for SMBs
                    </Heading>
                    <Heading level={2} className="text-lg font-bold text-primary text-center">
                        Julio Zavala - Full Stack Developer
                    </Heading>
                    <p className="max-w-2xl text-lg text-foreground/80 mx-auto">
                        I build high-performance web systems, boost your productivity, and streamline your operations.
                        <span className="text-foreground"> Zero generic templates. Just tailored software engineered to optimize your operations.</span>
                    </p>
                </div>
            </main>
        </Container>
    )
}