import Image from "next/image";
import { Button } from "@/shared/components/ui/button";
import { SquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { Heading } from "@/shared/typography/heading";
import { ProjectProps } from "../types/landing.types";
import { cn } from "@/shared/lib/utils";
import { imagePositionDictionary, tagsDictionary } from "../constants";

export function Project({
    title,
    description,
    image,
    liveUrl,
    githubUrl,
    technologies,
    imagePosition = "center",
}: ProjectProps) {
    return (
        <article className="flex flex-col sm:flex-row gap-4">
            <div className="rounded-md overflow-hidden" style={{ flexBasis: "50%" }}>
                <Image
                    src={image}
                    alt={`Screenshot of ${title}`}
                    width={500}
                    height={300}
                    className={cn(
                        "aspect-video object-cover w-full h-full",
                        imagePositionDictionary[imagePosition]
                    )}
                />
            </div>
            <div className="flex-1">
                <Heading className="text-2xl! sm:text-3xl!" level={3}>{title}</Heading>
                <div className="flex gap-2 mt-2 mb-4">
                    {technologies.map(tech => {
                        const Tag = tagsDictionary[tech];
                        return <Tag key={tech} />
                    })}
                </div>
                <p className="sm:text-lg max-w-md text-secondary-foreground/80">
                    {description}
                </p>

                <div className="flex items-center justify-start gap-4 mt-4">
                    <Button
                        size={"lg"}
                        variant="outline"
                        className="rounded-sm text-md sm:text-lg"
                        asChild
                    >
                        <Link
                            className="flex items-center gap-2"
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SquareArrowUpRight className="size-5" />
                            View live
                        </Link>
                    </Button>
                    <Button
                        size={"lg"}
                        variant="outline"
                        className="rounded-sm text-md sm:text-lg"
                        asChild
                    >
                        <Link
                            className="flex items-center gap-2"
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsGithub className="size-5" />
                            Code
                        </Link>
                    </Button>
                </div>
            </div>
        </article>
    )
}