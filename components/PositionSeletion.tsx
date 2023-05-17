'use client'
import Select from "react-select"

export type PositionSelectionProps = {
    positions: string[],
    onChange: (position: string[]) => void
}


const PositionSelection = ({
    positions,
    onChange,
}: PositionSelectionProps): JSX.Element => {
    return (
        <div className="flex flex-col">
            <label htmlFor="positionSelection" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose positions</label>
            <Select
                id="positionSelection"
                isMulti
                placeholder="Choose positions.."
                className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex flex-wrap capitalize"
                onChange={(value) => onChange(value.map((positionOption) => positionOption.value))}
                options={positions.map((position) => {
                    return {
                        value: position,
                        label: position,
                    }
                })}
            />
            {/* <select
                id="positionSelection"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 capitalize p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                size={3}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
                defaultValue={""}
            >
                <option value="">Choose a position</option>
                {
                    positions.map((position, index) =>
                        <option key={index} value={position}>{position}</option>
                    )
                }
            </select> */}
        </div>
    )
}

export default PositionSelection