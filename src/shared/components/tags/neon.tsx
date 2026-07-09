import Image from "next/image";

export function Neon() {
    return (
        <span className="flex items-center gap-2 text-sm px-2 py-1 bg-emerald-400/20 rounded-full">
            <Image
                className="size-3"
                src="/svg/neon.svg"
                alt="Neon"
                width={24}
                height={24}
            />
            Neon
        </span>
    )
}