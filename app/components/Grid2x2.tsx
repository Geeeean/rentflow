import { Variants, motion } from 'framer-motion'

type Props = {
    content: {
        tag: string,
        icon: JSX.Element,
        desc: string
    }[]
}

const itemsVariants: Variants = {
    offscreen: {
        x: -50,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};


const Grid2x2 = ({ content }: Props) => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 w-full'>
            {content.map((item, index) => {
                return (
                    <motion.div viewport={{ once: true, amount: 0.8 }} initial="offscreen" whileInView="onscreen" 
                    // variants={itemsVariants} 
                    key={index} className='bg-gray-100 rounded-md p-4 flex flex-col gap-2 shadow-sm text-center md:text-left'>
                        <div className='flex gap-2 items-center text-lg md:text-2xl font-bold justify-center md:justify-start'>
                            {item.icon}
                            <p className='text-gray-900'>{item.tag}</p>
                        </div>
                        <p className='text-gray-700'>{item.desc}</p>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default Grid2x2