import skull_icon from "../assets/skull_icon.svg";
import heart_icon from "../assets/heart_icon.svg";
import { useNavigate } from "react-router-dom";

import { BsQuestionDiamondFill } from "react-icons/bs";

export default function CharactersCard({ character, colors }) {
  const navigate = useNavigate();
  return (
    <article
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg flex flex-col justify-between items-center"
      onClick={() => {
        navigate(`/character/id/${character.id}`);
      }}
    >
      <div className="flex items-center">
        {character.status !== "unknown" ? (
          <img
            src={character.status === "Alive" ? heart_icon : skull_icon}
            alt="status Icon"
          />
        ) : (
          <BsQuestionDiamondFill className="text-gray-700" />
        )}
        <h3 className="character-card">{character.name}</h3>
      </div>
      <div className="mb-4">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-full"
          style={{
            borderColor: `#${colors[character.id - 1]}`,
            borderWidth: "5px",
          }}
        />
      </div>
    </article>
  );
}
