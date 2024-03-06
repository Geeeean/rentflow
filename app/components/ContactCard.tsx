import { useEffect, useState } from 'react'
import { BiCheck, BiCopy } from 'react-icons/bi'

type Props = {
    title: string,
    content: string,
    icon: React.JSX.Element
}

const ContactCard = ({ title, content, icon }: Props) => {
    const [isPressed, setIsPressed] = useState<boolean>(false)


    useEffect(() => {

        let timer: string | number | NodeJS.Timeout | undefined;

        if (isPressed)
            timer = setTimeout(() => {
                setIsPressed(false);
            }, 3000)

        return () => clearTimeout(timer)
    }, [isPressed])


    return (
        <div className="z-10 flex flex-col justify-start">
            <p className="text-lg font-medium">{title}</p>
            <div className="flex gap-4 mt-2 py-1 px-2 rounded-full items-center justify-between ring-1 ring-slate-600 bg-black/10">
                <div className="flex items-center gap-2">
                    <div className="p-2">
                        {icon}
                    </div>
                    <span>{content}</span>
                </div>
                <div className="p-2 px-4 flex items-center justify-center bg-indigo-950 text-indigo-400 rounded-2xl w-fit info@rentflow.it"
                    onClick={() => {
                        navigator.clipboard.writeText(content)
                        setIsPressed(true)
                    }}
                >
                    {isPressed ? <BiCheck /> : <BiCopy />}
                </div>
            </div>
        </div>
    )
}

export default ContactCard