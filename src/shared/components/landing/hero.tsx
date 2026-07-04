import { Heading } from "@/shared/typography/heading";

export function Hero() {
    return (
        <main className="flex flex-col gap-4 my-8 md:my-12">
            <Heading>
                Julio César Zavala Blanco
            </Heading>
            <span className="text-lg font-medium text-primary">
                Custom Software & Automation for SMBs
            </span>
            <p className="max-w-md text-foreground/80">
                I build high-performance web systems, internal dashboards, and custom automations that help local businesses save time and protect their margins.
                <span className="text-foreground"> Zero generic templates. Just tailored software engineered to optimize your operations.</span>
            </p>
        </main>
    )
}