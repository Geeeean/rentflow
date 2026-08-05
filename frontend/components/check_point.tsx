import { CheckCircle2 } from "lucide-react";

type Props = {
    /** Omit for a plain checked line with no heading. */
    title?: string,
    text: string,
}

const CheckPoint = ({ title, text }: Props) => {
    return (
        <div className="flex gap-4 group">
            <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 group-hover:text-emerald-500 transition-colors" />
            </div>
            <div>
                {title && <h4 className="text-xl font-serif font-medium text-slate-900">{title}</h4>}
                <p className={title ? "text-slate-600" : "text-lg text-slate-600 leading-relaxed"}>{text}</p>
            </div>
        </div>
    )
}

export { CheckPoint }
