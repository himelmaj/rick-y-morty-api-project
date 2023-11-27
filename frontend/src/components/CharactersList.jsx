import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacters } from "../api/rickymorty.api";
import { getColors } from "../api/jsonplaceholder.api";
import Pagination from "../components/Pagination";
import CharacterCard from "../components/CharactersCard";


export function CharactersList() {
  const { page } = useParams();
  const [characters, setCharacters] = useState([]);
  const [colors, setColors] = useState([]);
  const [minPage, setMinPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    async function loadCharacters() {
      const res = await getCharacters(page);
      setCharacters(res.results);
      setMaxPage(res.info.pages);
    }
    loadCharacters();
  }, [page]);
  return (
    <main>
      <section className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3 ">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </section>
      <section className="grid grid-cols-2 place-items-center">
        <Pagination
          page={parseInt(page, 10)}
          maxPage={maxPage}
        />
      </section>
    </main>
  );
}
