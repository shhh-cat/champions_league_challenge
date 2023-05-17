import { Player } from "@/types"
import PlayerCard from "./PlayerCard"


export type PlayerTableProps = {
    players: Player[]
}

const PlayerTable = ({
    players
}: PlayerTableProps): JSX.Element => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                players.map((player, index) =>
                    <div key={index}>
                        <PlayerCard player={player}/>
                    </div>
                )
            }
        </div>
    )
}

export default PlayerTable