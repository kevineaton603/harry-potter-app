import { useContext } from "react";
import { HouseContext } from "../providers/HouseProvider";

export type HouseNames = "Gryffindor" | "Hufflepuff" | "Ravenclaw" | "Slytherin";

const HouseCount: React.FC<{ house: HouseNames }> = ({ house }) => {
    const students = useContext(HouseContext);

    return (
        <div>
            <h3>{house}</h3>
            <span>{students?.length ?? 0}</span>
        </div>
    );
}

export default HouseCount;
