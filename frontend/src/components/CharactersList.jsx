import { useState, useEffect } from "react";
import { getCharacters } from "../api/rickymorty.api";
import { getColors } from "../api/jsonplaceholder.api";
import next_icon from "../assets/next_icon.svg";
import prev_icon from "../assets/prev_icon.svg";

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

    async function loadColors() {
      const res = await getColors();
      setColors(res);
    }

    loadCharacters();
    loadColors();
  }, [page]);
  console.log(maxPage);
  // console.log(characters);
  // console.log(colors);
  return (
    <main>
      <section className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3 ">
        {characters.map((character) => (
          <article
            key={character.id}
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg flex flex-col justify-between items-center"
          >
            <div className="text-center">
              <h1 className="text-xl font-bold my-4">{character.name}</h1>
            </div>
            <div className="mb-4">
              <img
                src={character.image}
                alt={character.name}
                className="rounded-full"
              />
            </div>
          </article>
        ))}
      </section>
      <section className="grid grid-cols-2 place-items-center">
      <button
        className="bg-gray-500 my-5 mx-2 px-3 py-2 rounded-full inline-block hover:bg-gray-600 hover:cursor-pointer text-zinc-950 font-bold text-center"
        onClick={() => {
          page > minPage ? setPage(page - 1) : null;
        }}
      >
        <img src={next_icon} className="" />
      </button>
      <button
        className="bg-gray-500 my-5 mx-2 px-3 py-2 rounded-full inline-block hover:bg-gray-600 hover:cursor-pointer text-zinc-950 font-bold text-center"
        onClick={() => {
          page < maxPage ? setPage(page + 1) : null;
        }}
      >
        <img src={prev_icon} />
      </button>
      </section>

    </main>
  );
}
