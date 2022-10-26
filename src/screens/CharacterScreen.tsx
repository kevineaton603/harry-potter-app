import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCharactersAsync } from "../api/harry-potter-api";

const CharacterScreen: React.FC = () => {
  const { id } = useParams();
  const { data } = useQuery(["characters"], () => getCharactersAsync(), {
    select: (d) => d.at(Number(id)),
  });

  return <div>{data?.name}</div>;
};

export default CharacterScreen;
