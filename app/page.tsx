'use client'
import FilteredPlayerTable from '@/components/FilteredPlayerTable'
import PlayerCard from '@/components/PlayerCard'
import PlayerTable from '@/components/PlayerTable'
import PositionSelection from '@/components/PositionSeletion'
import Image from 'next/image'


const playerArray = [
	{
		id: 1,
		name: "Erling Haaland",
		positions: ["forward"],
		team: "Manchester City",
		image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg"
	},
	{
		id: 2,
		name: "Thibaut Courois",
		positions: ["goalkeeper"],
		team: "Real Madrid",
		image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg"
	},
  {
		id: 3,
		name: "Lionel Messi",
		positions: ["forward"],
		team: "Paris Saint-Germain",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
	},
  {
		id: 4,
		name: "Luka Modric",
		positions: ["midfielder"],
		team: "Real Madrid",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Luka_Modric_Interview_2021_%28cropped%29.jpg/220px-Luka_Modric_Interview_2021_%28cropped%29.jpg"
	},
  {
		id: 5,
		name: "Kylian Mbappé",
		positions: ["forward"],
		team: "Paris Saint-Germain",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/220px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg"
	},
  {
		id: 6,
		name: "Achraf Hakimi",
		positions: ["Defender"],
		team: "	Paris Saint-Germain",
		image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Iran-Morocco_by_soccer.ru_14_%28Achraf_Hakimi%29.jpg"
	},
  {
		id: 7,
		name: "Neymar",
		positions: ["Winger"],
		team: "Paris Saint-Germain",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/220px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg"
	},
  {
		id: 8,
		name: "Virgil van Dijk",
		positions: ["Defender"],
		team: "Liverpool",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/FC_Salzburg_gegen_Liverpool_FC_%28UEFA_Champions_League_10.Dezember_2019%29_19.jpg/220px-FC_Salzburg_gegen_Liverpool_FC_%28UEFA_Champions_League_10.Dezember_2019%29_19.jpg"
	},
]

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto py-4 px-3 lg:px-0">
      <FilteredPlayerTable players={playerArray}/>
    </main>
  )
}
