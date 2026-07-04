import { ThemeToggle } from "@/shared/components/ui/theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export function Navigation() {
    return (
        <nav aria-label="Main navigation" className="flex items-center justify-end w-full p-4 ">
            {navItems.map((item) => (
                <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                >
                    <Link
                        href={item.href}
                        className="transition-colors hover:text-primary text-xs text-foreground/80"
                    >
                        {item.label}
                    </Link>
                </Button>
            ))}
        </nav>
    )
}