import { ArrowRight, Quote } from "lucide-react"
import { ReactNode } from "react"

type Props = {
    text: string,
    name: string,
    job: string,
    title: string,
}

const CardProof = ({ text, name, job, title }: Props) => {
    return <div className="p-10 flex flex-col items-start bg-white gap-6 rounded-md border shadow">
        <Quote size={36} />
        <p className="italic text-gray-500">"{text}"</p>

        <div className="w-full bg-gray-200 h-px" />

        <div className="flex gap-2 items-center">
            <div className="rounded-full p-4 bg-gray-200 font-bold">{title}</div>
            <div className="text-left">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{job}</p>
            </div>
        </div>
    </div>
}

export { CardProof } 
