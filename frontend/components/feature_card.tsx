import { ReactNode } from "react";

type Props = {
    icon: ReactNode,
    title: string,
    text: string,
    colorClass?: string,
}

const FeatureCard = ({ icon, title, text, colorClass = "bg-blue-50" }: Props) => {
    return (
        <div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-4 h-full">
            <div className={`size-14 rounded-xl flex items-center justify-center shadow-sm ${colorClass}`}>
                {icon}
            </div>
            <div>
                <h3 className="font-serif text-2xl font-medium mb-3 text-slate-900">{title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

export { FeatureCard }
