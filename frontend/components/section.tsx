import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Accent = "emerald" | "blue" | "orange" | "purple";

const accentText: Record<Accent, string> = {
    emerald: "text-emerald-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    purple: "text-purple-600",
}

type SectionProps = {
    children: ReactNode,
    className?: string,
    /** Anchor target for in-page jump links. */
    id?: string,
    /** Paints the section white against the stone-50 page background. */
    white?: boolean,
    /**
     * Full sections fill the screen below the nav and centre their content inside it.
     * Turn this off for short trailing blocks (closing CTAs, stat panels) that shouldn't
     * claim a whole screen.
     */
    full?: boolean,
}

const Section = ({ children, className, id, white = false, full = true }: SectionProps) => {
    return (
        <section id={id} className={cn(
            // Symmetric padding: the nav is accounted for by the container's scroll-pt-nav,
            // not by padding this element.
            "w-full flex items-center px-6 lg:px-10 py-16 lg:py-20 snap-start",
            // Exactly the visible area below the nav, so `items-center` centres content in
            // the middle of what the user can actually see. Full-screen slides are a desktop
            // idea — on mobile the columns stack and a forced screen height only adds dead space.
            full && "lg:min-h-[calc(100vh-var(--spacing-nav))]",
            // Always align tops. A full section already fills the visible area, so a
            // top-aligned snap and a centred one look identical when the content fits — but
            // when it overflows, only snap-start keeps the heading clear of the nav.
            // Short sections can't overflow, so they may safely centre on desktop.
            !full && "lg:snap-center",
            white && "bg-white",
            className,
        )}>
            <div className="max-w-7xl mx-auto w-full">
                {children}
            </div>
        </section>
    )
}

type SectionHeadingProps = {
    eyebrow?: string,
    accent?: Accent,
    title: ReactNode,
    text?: ReactNode,
    center?: boolean,
    className?: string,
}

const SectionHeading = ({ eyebrow, accent = "emerald", title, text, center = false, className }: SectionHeadingProps) => {
    return (
        <div className={cn(center && "text-center max-w-3xl mx-auto", className)}>
            {eyebrow && (
                <span className={cn("text-sm font-bold uppercase tracking-widest mb-3 block", accentText[accent])}>
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 mb-4 lg:mb-6">{title}</h2>
            {text && <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">{text}</p>}
        </div>
    )
}

export { Section, SectionHeading }
export type { Accent }
