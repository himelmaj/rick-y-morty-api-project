import { useState, useEffect } from "react";
import { getCharacters } from "../api/rickymorty.api";
import { getColors } from "../api/jsonplaceholder.api";

export function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [colors, setColors] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function loadCharacters() {
      const res = await getCharacters(page);
      setCharacters(res);
    }
    async function loadColors() {
      const res = await getColors();
      setColors(res);
    }
    loadCharacters();
    loadColors();
  }, [page]);

  //   console.log(characters);
  console.log(colors);
  return (
    <main>
      <section className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3 mx-3">
        {characters.map((character) => (
          <article
            key={character.id}
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg"
          >
            <h1 className="text-xl font-bold text-center my-4">
              {character.name}
            </h1>
            <img
              src={character.image}
              alt={character.name}
              className="rounded-full"
            />
          </article>
        ))}
      </section>
      <button
        className="bg-gray-500 px-3 py-2 rounded-full inline-block hover:bg-gray-600 hover:cursor-pointer text-zinc-950 font-bold text-center"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-narrow-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
          <path d="M5 12l4 4"></path>
          <path d="M5 12l4 -4"></path>
        </svg>
      </button>
      <button
        className="bg-gray-500 px-3 py-2 rounded-fullinline-block hover:bg-gray-600 hover:cursor-pointer text-zinc-950 font-bold text-center"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-narrow-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
          <path d="M15 16l4 -4"></path>
          <path d="M15 8l4 4"></path>
        </svg>
      </button>
    </main>
  );
}
