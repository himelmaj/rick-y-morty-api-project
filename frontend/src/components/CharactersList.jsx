import { useState, useEffect } from "react";
import { getCharacters } from "../api/rickymorty.api";
import { getColors } from "../api/jsonplaceholder.api";
import Pagination from "../components/Pagination";

import next_icon from "../assets/next_icon.svg";
import prev_icon from "../assets/prev_icon.svg";
import heart_icon from "../assets/heart_icon.svg";
import skull_icon from "../assets/skull_icon.svg";

export function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [colors, setColors] = useState([]);
  const [page, setPage] = useState(1);
  const [minPage, setMinPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    async function loadCharacters() {
      const res = await getCharacters(page);
      setCharacters(res.results);
      setMaxPage(res.info.pages);
    }
    loadCharacters();
    async function loadColors() {
      const res = await getColors();
      setColors(res);
    }
    loadColors();
  }, [page]);
  console.log(characters);
  console.log(colors);
  return (
    <main>
      <section className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3 ">
        {characters.map((character) => (
          <article
            key={character.id}
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg flex flex-col justify-between items-center"
          >
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
        ))}
      </section>
      <section className="grid grid-cols-2 place-items-center">
        <Pagination page={page} minPage={minPage} maxPage={maxPage} setPage={setPage} prev_icon={prev_icon} next_icon={next_icon}
        />
      </section>
    </main>
  );
}
