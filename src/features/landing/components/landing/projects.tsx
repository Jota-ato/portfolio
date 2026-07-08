import { Heading } from "@/shared/typography/heading";
import { Container } from "../../../../shared/components/ui/container";


export function ProjectsSection() {
    return (
        <section className="py-8 md:py-12 min-h-screen bg-secondary text-secondary-foreground">
            <Container className="space-y-8">
                <Heading level={2}>My work</Heading>
                
            </Container>
        </section>
    )
}