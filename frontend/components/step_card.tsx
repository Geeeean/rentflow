type Props = {
    num: string,
    title: string,
    text: string,
}

const StepCard = ({ num, title, text }: Props) => {
    return (
        <div className="flex flex-col gap-4 border-l-2 border-slate-200 pl-6 py-2 hover:border-slate-900 transition-colors duration-300">
            <span className="text-4xl font-serif text-slate-300 font-bold">{num}</span>
            <div>
                <h4 className="text-xl font-serif font-medium text-slate-900 mb-2">{title}</h4>
                <p className="text-slate-600 leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

export { StepCard }
