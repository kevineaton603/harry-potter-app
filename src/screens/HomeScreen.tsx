import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCharactersAsync } from "../api/harry-potter-api";
import HouseCount from "../components/HouseCount";

const HomeScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const { data } = useQuery(["characters"], () => getCharactersAsync(), {
    select: (characters) =>
      characters
        .filter((character) =>
          character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        )
        .filter(
          (character) =>
            status === "" ||
            (status === "alive" && character.alive) ||
            (status === "dead" && !character.alive)
        ),
    staleTime: Infinity,
  });

  return (
    <div className="App">
      <h1>Harry Potter App</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <HouseCount house="Gryffindor" />
        <HouseCount house="Hufflepuff" />
        <HouseCount house="Ravenclaw" />
        <HouseCount house="Slytherin" />
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <select name="dead-or-alive" onChange={(e) => setStatus(e.target.value)}>
        <option value=""></option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
      </select>
      {data?.map((character, index) => (
        <div key={`${character.name}-${index}`}>{character.name}</div>
      ))}
    </div>
  );
};

export default HomeScreen;
