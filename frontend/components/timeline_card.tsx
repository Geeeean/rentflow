import { DotIcon } from "lucide-react";

type Props = {
    title: string,
    text: string,
    num: number,
};

const TimelineCard = ({ title, text, num }: Props) => {
    return <div className="flex flex-col text-center items-center gap-8 flex-1">
        <div className="font-serif text-2xl px-6 py-4 border rounded-sm shadow-inner flex justify-center items-center text-center">{num}</div>
        <div className="flex flex-col text-center items-center gap-4">
            <p className="font-serif text-xl max-w-lg">{title}</p>
            <p className="max-w-xl text-gray-500">{text}</p>
        </div>
    </div>
}


export default TimelineCard;
