import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"

type Props = {
    icon: ReactNode
    title: string,
    text: string,
}

const Card1 = ({ icon, title, text }: Props) => {
    return <div className="p-10 flex flex-col items-start bg-white gap-6 rounded-md border shadow">
        <div className="p-3 bg-gray-100 rounded-md w-fit border shadow">
            {icon}
        </div>
        <div>
            <p className="font-serif text-2xl lg:text-3xl mb-2 lg:mb-0">{title}</p>
            <p className="text-gray-500">{text}</p>
        </div>
        <div className="font-semibold flex items-center gap-2">
            <span>Scopri di piu</span>
            <ArrowRight />
        </div>
    </div>
}

export { Card1 } 
