import { Container } from "../../../../shared/components/ui/container";
import { Navigation } from "./navigation";

export function Header() {
    return (
        <Container>
            <header className="flex items-center justify-between py-4">
                <p className="text-sm">Julio Zavala</p>
                <Navigation />
            </header>
        </Container>
    )
}
