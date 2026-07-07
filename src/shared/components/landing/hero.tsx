import { Heading } from "@/shared/typography/heading";
import Image from "next/image";

export function Hero() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 my-4 md:my-8 min-h-120">
            <div className="space-y-4">
                <Heading>
                    Julio César Zavala Blanco
                </Heading>
                <p className="text-lg font-bold text-primary">
                    Custom Software & Automation for SMBs
                </p>
                <p className="max-w-sm text-foreground/80">
                    I build high-performance web systems, internal dashboards, and custom automations that help local businesses save time and protect their margins.
                    <span className="text-foreground"> Zero generic templates. Just tailored software engineered to optimize your operations.</span>
                </p>
            </div>
            <div>
                <Image 
                    src={"/img/me.jpeg"}
                    alt="Image of Julio César Zavala Blanco"
                    width={400}
                    height={400}
                    loading="eager"
                    priority
                    className="aspect-square rounded-full"
                />
            </div>
        </main>
    )
}