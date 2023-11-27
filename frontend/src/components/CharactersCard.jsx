import skull_icon from "../assets/skull_icon.svg";
import heart_icon from "../assets/heart_icon.svg";
import { getColorsById } from "../api/jsonplaceholder.api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";

export default function CharactersCard({ character }) {
  const navigate = useNavigate();
  const [color, setColor] = useState("");
  useEffect(() => {
    async function fetchColor() {
      try {
        const res = await getColorsById(character.id);
        setColor(res);
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    }
    fetchColor();
  }, []);

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
            borderColor: `#${color}`,
            borderWidth: "5px",
          }}
        />
      </div>
    </article>
  );
}
