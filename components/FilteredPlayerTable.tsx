import { Player } from "@/types"
import PlayerCard from "./PlayerCard"
import PositionSelection from "./PositionSeletion"
import PlayerTable from "./PlayerTable"
import { useEffect, useState } from "react"


export type FilteredPlayerTableProps = {
    players: Player[]
}

const FilteredPlayerTable = ({
    players
}: FilteredPlayerTableProps): JSX.Element => {
    
    const [selectedPosition, setSelectedPosition] = useState<string[]>([])
    const [filteredPlayer, setFilterdPlayer] = useState<Player[]>([])


    useEffect(() => {
        const filter = selectedPosition.length > 0 ?
            players.filter((player) => player.positions.some((position) => selectedPosition.includes(position)))
            : players
        setFilterdPlayer(filter)
    }, [selectedPosition])

    return (
        <div className="flex flex-col gap-4">
            <PositionSelection
                positions={Array.from(new Set(players.flatMap(({ positions }) => positions)))}
                onChange={(positions) => {
                    setSelectedPosition(positions)
                }} />
            <PlayerTable players={filteredPlayer} />
        </div>
    )
}

export default FilteredPlayerTable