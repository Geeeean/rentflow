import { DotIcon } from "lucide-react";

type Props = {
    text: string
};

const Badge = ({ text }: Props) => {
    return <div className="flex border rounded-md pl-2 pr-3 py-1 shadow-xl items-center w-fit bg-white">
        <DotIcon className="text-black/80" />
        <span className="text-xs font-bold text-black/80">{text}</span>
    </div>
}


export { Badge };
