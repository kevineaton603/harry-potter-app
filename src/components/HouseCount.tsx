import { useQuery } from "@tanstack/react-query";
import { getCharactersAsync } from "../api/harry-potter-api";

export type HouseNames =
  | "Gryffindor"
  | "Hufflepuff"
  | "Ravenclaw"
  | "Slytherin";

const HouseCount: React.FC<{ house: HouseNames }> = ({ house }) => {
  const { data } = useQuery(["characters"], () => getCharactersAsync(), {
    select: (characters) =>
      characters.filter((character) => character.house === house),
  });

  return (
    <div>
      <h3>{house}</h3>
      <span>{data?.length ?? 0}</span>
    </div>
  );
};

export default HouseCount;
