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
            <div className="text-lg font-medium flex items-center gap-2">
                <div className='flex gap-2 items-center'>
                    <div className="flex items-center justify-center text-indigo-400 rounded-2xl w-fit"
                        onClick={() => {
                            navigator.clipboard.writeText(content)
                            setIsPressed(true)
                        }}
                    >
                        {isPressed ? <BiCheck /> : <BiCopy />}
                    </div>
                    {/* {icon} */}
                    {title}
                </div>
            </div>

            <div className="flex items-center gap-2 grow break-words">
                <p className='break-words grow break-all'>{content}</p>
            </div>

        </div>
    )
}

export default ContactCard