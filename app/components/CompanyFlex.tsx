import Image from "next/image"

import airbnb from "@/public/airbnb.svg"
import idealista from "@/public/idealista.svg"
import subito from "@/public/subito.it.svg"
import immobiliare from "@/public/immobliare.svg"

const ITEMS = [airbnb, idealista, subito, immobiliare]

type Props = {}

const CompanyFlex = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row md:gap-12 items-center justify-center bg-gray-100 p-4">
            {ITEMS.map((item, index) => {
                return (
                    <div key={index} className="w-32 h-32 relative">
                        <Image src={item} alt='logo' fill />
                    </div>
                )
            })}
        </div>
    )
}

export default CompanyFlex