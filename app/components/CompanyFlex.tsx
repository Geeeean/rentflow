import Image from "next/image"

import airbnb from "@/public/airbnb.svg"
import idealista from "@/public/idealista.svg"
import subito from "@/public/subito.it.svg"
import immobiliare from "@/public/immobliare.svg"

type Props = {}

const CompanyFlex = (props: Props) => {
    return (
        <div className="flex gap-16 items-center relative w-1/2">
            <div className="w-1/4">
                <Image src={airbnb} alt='logo' fill />
            </div>
            <div className="w-1/4">
                <Image src={airbnb} alt='logo' fill />
            </div>
            <div className="w-1/4">
                <Image src={airbnb} alt='logo' fill />
            </div>
            <div className="w-1/4">
                <Image src={airbnb} alt='logo' fill />
            </div>
        </div>
    )
}

export default CompanyFlex