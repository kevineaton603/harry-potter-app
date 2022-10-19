import { CharacterType } from "../api/harry-potter-api";

type CharacterCardProps = {
  character: CharacterType;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-slate-100 flex flex-row">
      <img className="h-24 m-1" src={character.image} alt={character.name} />
      <div>
        <h3>{character.name}</h3>
        <span>{character.house}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
