import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CharacterType, getCharactersAsync } from "./api/harry-potter-api";

function App() {
  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  const get = useCallback(async () => {
    const c = await getCharactersAsync();
    setCharacters(c);
  }, []);

  useEffect(() => {
    get();
  }, [get]);
  return (
    <div className="App">
      {characters.map((character) => (
        <div key={character.name}>{character.name}</div>
      ))}
    </div>
  );
}

export default App;
