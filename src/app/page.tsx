import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-zinc-950">
      <main className="flex w-full max-w-xl flex-col items-start gap-8 py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
          </span>
          Under construction
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            My portfolio is on its way
          </h1>
          <p className="max-w-md text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            I&apos;m building something worth showing. In the meantime, you
            can find me here:
          </p>
        </div>

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
        <Link
          href="https://portfolio-gamma-two-96.vercel.app"
          className="text-sm text-zinc-500 dark:text-zinc-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can see the progress <span className="text-indigo-500 dark:text-indigo-400">here</span>.
        </Link>
      </main>
    </div>
  );
}