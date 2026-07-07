import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
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
        <div className="flex items-center">
            <ThemeToggle />
            <DesktopNavigation />
            <MobileNavigation />
        </div>
    )
}


function DesktopNavigation() {
    return (
        <nav aria-label="Main navigation" className="hidden md:flex items-center justify-end w-full">
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

function MobileNavigation() {
    return (
        <nav>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <MenuIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {navItems.map((item) => (
                        <DropdownMenuItem asChild key={item.label}>
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
}