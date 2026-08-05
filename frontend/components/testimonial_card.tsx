import { Quote, Star } from "lucide-react";

type Props = {
    name: string,
    role: string,
    text: string,
}

const TestimonialCard = ({ name, role, text }: Props) => {
    return (
        <div className="p-8 rounded-xl border border-stone-100 bg-white relative">
            <Quote className="absolute top-6 right-6 text-stone-200 w-10 h-10" />
            <div className="flex gap-1 text-orange-400 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-700 italic mb-6 text-lg">&ldquo;{text}&rdquo;</p>
            <div>
                <p className="font-serif text-slate-900 font-medium">{name}</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">{role}</p>
            </div>
        </div>
    )
}

export { TestimonialCard }
