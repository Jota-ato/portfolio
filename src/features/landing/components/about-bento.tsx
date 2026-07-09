import { Container } from "@/shared/components/ui/container";
import { BentoElement } from "./bento-element";
import { bentoElements } from "../constants";

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