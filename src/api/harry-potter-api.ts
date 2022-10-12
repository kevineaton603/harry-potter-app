export type CharacterType = {
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartStudent: boolean;
  hogwarts: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};

export const getCharactersAsync = async () => {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const json = await response.json();

  return json as CharacterType[];
};
