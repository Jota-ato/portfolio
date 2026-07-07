import { Container } from "../ui/container";

export function AboutBento() {
    return (
        <section className="min-h-screen py-8 md:py-12 flex flex-col">
            <Container className="flex-1 grid grid-cols-1 grid-rows-7 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-3 gap-4 text-secondary-foreground">
                <div className="md:col-span-2 row-span-2 bg-secondary">
                    1
                </div>
                <div className="lg:col-span-2 bg-secondary">
                    2
                </div>
                <div className="bg-secondary">
                    3
                </div>
                <div className="lg:row-span-2 row-span-2 md:row-span-1 bg-secondary">
                    4
                </div>
                <div className="bg-secondary md:row-span-2 lg:row-span-1 md:col-span-2 lg:col-span-1">
                    5
                </div>
                <div className="lg:col-span-2 bg-secondary">
                    6
                </div>
            </Container>
        </section>
    )
}