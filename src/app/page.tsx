import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

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
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 px-6 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Quick Single Page Navigation */}
      <header className="sticky top-0 z-50 flex w-full max-w-xl items-center justify-between py-6 backdrop-blur-md bg-zinc-50/70 dark:bg-zinc-950/70">
        <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          JCZB
        </span>
        <nav aria-label="Main navigation">
          <ul className="flex gap-5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex w-full max-w-xl flex-col items-start gap-10 py-16 sm:py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Julio César Zavala Blanco
          </h1>
          <h2 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
            Full Stack Web Developer
          </h2>
          <p className="max-w-md text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            I am a 16-year-old developer specializing in building clean, functional web applications. Driven by continuous self-education, I constantly explore new architectural solutions and modern technologies to expand my skillset.
          </p>
        </div>

        {/* Social and Contact Links */}
        <div className="w-full flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
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
                    className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30"
                  >
                    <span className="flex items-center gap-3">
                      <Icon
                        className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-indigo-500 dark:text-zinc-500"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {label}
                        </span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-500">
                          {value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-zinc-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500 dark:text-zinc-700"
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