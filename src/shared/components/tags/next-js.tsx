import Image from "next/image";

export function NextJSTag() {
    return (
        <span className="flex items-center gap-2 text-sm px-2 py-1 bg-black text-white rounded-full">
            <Image 
                className="size-5"
                src="/svg/next.svg"
                alt="Next.js"
                width={24}
                height={24}
            />
            Next.js
        </span>
    )
}