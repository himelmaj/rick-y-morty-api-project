import skull_icon from "../assets/skull_icon.svg";
import heart_icon from "../assets/heart_icon.svg";

export default function CharactersCard({ character, colors }) {
  return (
    <article className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg flex flex-col justify-between items-center">
      <div className="flex flex-wrap">
        <img
          src={character.status === "Alive" ? heart_icon : skull_icon}
          alt="status Icon"
        />
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
