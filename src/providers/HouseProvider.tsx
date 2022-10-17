import { createContext, useMemo } from "react";
import { CharacterType } from "../api/harry-potter-api";
import { HouseNames } from "../components/HouseCount";

export const HouseContext = createContext<CharacterType[] | null>(null);

type Props = {
    children?: React.ReactNode;
    house: HouseNames;
    characters: CharacterType[]
}

const HouseProvider: React.FC<Props> = ({ children, house, characters }) => {
    const students = useMemo(() => {
        return characters.filter(character => character.house === house)
      }, [characters, house])

    return (
        <HouseContext.Provider value={students}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseProvider;