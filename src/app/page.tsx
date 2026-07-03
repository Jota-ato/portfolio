import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/shared/components/ui/theme-toggle";

const links = [
  {
    label: "GitHub",
    value: "Jota-ato",
    href: "https://github.com/Jota-ato?tab=repositories",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Julio César Zavala",
    href: "https://www.linkedin.com/in/julio-c%C3%A9sar-zavala-blanco-35baa8365/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    value: "juliozavala@julio-zavala.me",
    href: "mailto:juliozavala@julio-zavala.me",
    icon: Mail,
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-6 font-sans text-foreground">
      {/* Quick Single Page Navigation */}
      <header className="sticky top-0 z-50 flex w-full max-w-4xl items-center justify-end py-6 backdrop-blur-md bg-background/70">
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 text-xs font-medium text-foreground/70">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex w-full max-w-4xl flex-col items-start gap-10 py-16 sm:py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Julio César Zavala Blanco
          </h1>
          <h2 className="text-lg font-medium text-primary">
            Full Stack Web Developer
          </h2>
          <p className="max-w-md text-base leading-relaxed text-foreground/70">
            Want to take your projects to the next level?
            <br />
            I can help you build scalable and efficient web applications that <span className="font-bold text-foreground">meet your business needs</span>.
          </p>
        </div>

        {/* Social and Contact Links */}
        <div className="w-full flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
            Connect
          </h3>
          <nav aria-label="Social and contact links" className="w-full">
            <ul className="flex w-full flex-col gap-2">
              {links.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 text-foreground/80 transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:hover:border-primary dark:hover:bg-primary/20"
                  >
                    <span className="flex items-center gap-3">
                      <Icon
                        className="h-4 w-4 shrink-0 text-foreground/60 transition-colors group-hover:text-primary"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">
                          {label}
                        </span>
                        <span className="text-xs text-foreground/60">
                          {value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}