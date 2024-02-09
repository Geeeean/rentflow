type Props = {
    tag: string,
    title: string,
    subtitle: string,
    desc: string,
    btnText: string
}

const Card = ({ tag, title, subtitle, desc, btnText }: Props) => {
    return (
        <div className='shrink bg-gray-50 shadow-sm p-5 flex flex-col items-center rounded-xl gap-4'>
            <div className={"h-16 justify-center items-center" + (tag ? "flex" : "hidden md:flex")}>
                {tag ? <div className='bg-blue-100 font-bold text-blue-600 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO COMPLETO</div> : ""}
            </div>
            <p className='bold text-5xl font-bold mb-2'>{title}</p>
            <p className='mb-5 text-xl font-light text-gray-700'>{subtitle}</p>
            <p className='text-center mb-8 text-xl max-w-80'>{desc}</p>
            <button className='font-bold text-gray-50 w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700'>{btnText}</button>
        </div>
    )
}

export default Card