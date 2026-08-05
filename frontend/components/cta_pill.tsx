import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
    label: string,
    href: string,
    variant?: "dark" | "light",
    className?: string,
}

const CtaPill = ({ label, href, variant = "dark", className }: Props) => {
    const dark = variant === "dark";

    return (
        <Link
            href={href}
            className={cn(
                "pl-4 pr-2 py-2 rounded-full flex gap-3 items-center w-fit transition-colors",
                dark ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-stone-100",
                className,
            )}
        >
            <span className="font-semibold">{label}</span>
            <div className={cn("p-1 rounded-full", dark ? "bg-white text-black" : "bg-slate-900 text-white")}>
                <ArrowRight size={20} />
            </div>
        </Link>
    )
}

export { CtaPill }
