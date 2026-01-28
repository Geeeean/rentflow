type Props = {
    stat: string;
    subtitle: string;
}

const Stats = ({ stat, subtitle }: Props) => {
    return <div className="flex flex-col items-center gap-2">
        <p className="text-4xl font-serif font-semibold lg:font-normal lg:text-5xl">{stat}</p>
        <p className="text-center text-xs lg:text-sm">{subtitle}</p>
    </div>
}

export { Stats }

