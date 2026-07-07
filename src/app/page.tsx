import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";
import { Hero } from "@/shared/components/landing/hero";
import { ProjectsSection } from "@/shared/components/landing/projects";
import { AboutBento } from "@/shared/components/landing/about-bento";

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
    <div>
      <Hero />
      <AboutBento />
      <ProjectsSection />
    </div>
  );
}