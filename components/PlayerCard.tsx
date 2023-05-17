import { Player } from "@/types"


export type PlayerCardProps = {
    player: Player
}

const PlayerCard = ({
    player
}: PlayerCardProps): JSX.Element => {
    return (
        <a href="#" className="relative overflow-hidden flex flex-col items-start lg:items-center bg-white border rounded-lg shadow lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="absolute right-0 top-0 bg-orange-300 p-1 rounded-bl-lg font-bold text-xs">
                {player.team}
            </div>
            <img className="object-cover w-full rounded-t-lg h-96 lg:h-48 lg:w-48 lg:rounded-none lg:rounded-l-lg" src={player.image} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{player.name}</h5>
                <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">Positions:</h5>
                <div className="flex flex-wrap gap-2" >
                    {
                        player.positions.map((position, index) => {
                            return (
                                <span key={index} className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 uppercase">{position}</span>
                            )
                        })
                    }
                </div>
            </div>
        </a>

    )
}

export default PlayerCard