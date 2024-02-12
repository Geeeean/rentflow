import React from 'react'
import { FcOvertime } from 'react-icons/fc'

type Props = {
    content: {
        tag: string,
        icon: JSX.Element,
        desc: string
    }[]
}

const Grid2x2 = ({content}: Props) => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-2 w-full'>
            {content.map((item,index) => {
                return (
                    <div key={index} className='bg-gray-100 rounded-md p-4 flex flex-col gap-2 shadow-sm'>
                        <div className='flex gap-2 items-center text-lg md:text-2xl font-bold'>
                            {item.icon}
                            <p className='text-gray-900'>{item.tag}</p>
                        </div>
                        <p className='text-gray-700'>{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Grid2x2