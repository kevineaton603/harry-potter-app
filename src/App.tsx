import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { CharacterType, getCharactersAsync } from "./api/harry-potter-api";
import HouseCount from "./components/HouseCount";
import HouseProvider from "./providers/HouseProvider";

function App() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  const filteredCharacters = useMemo(() => {
    return characters
      .filter((character) =>
        character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      )
      .filter(
        (character) =>
          status === "" ||
          (status === "alive" && character.alive) ||
          (status === "dead" && !character.alive)
      );
  }, [characters, name, status]);

  const getCharacters = useCallback(async () => {
    const c = await getCharactersAsync();
    setCharacters(c);
  }, []);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

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
        <HouseProvider house="Gryffindor" characters={characters}>
          <HouseCount house="Gryffindor" />
        </HouseProvider>
        <HouseProvider house="Hufflepuff" characters={characters}>
          <HouseCount house="Hufflepuff" />
        </HouseProvider>
        <HouseProvider house="Ravenclaw" characters={characters}>
          <HouseCount house="Ravenclaw" />
        </HouseProvider>
        <HouseProvider house="Slytherin" characters={characters}>
          <HouseCount house="Slytherin" />
        </HouseProvider>
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
      {filteredCharacters.map((character, index) => (
        <div key={`${character.name}-${index}`}>{character.name}</div>
      ))}
    </div>
  );
}

export default App;
