import { useMemo } from "react";
import { useGetCharactersQuery } from "../services/character";

export type HouseNames =
  | "Gryffindor"
  | "Hufflepuff"
  | "Ravenclaw"
  | "Slytherin";

const HouseCount: React.FC<{ house: HouseNames }> = ({ house }) => {
  const { data } = useGetCharactersQuery();
  const count = useMemo(
    () => data?.filter((character) => character.house === house),
    [data, house]
  );
  return (
    <div>
      <h3>{house}</h3>
      <span>{count?.length ?? 0}</span>
    </div>
  );
};

export default HouseCount;
