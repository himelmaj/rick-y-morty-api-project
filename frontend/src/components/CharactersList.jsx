import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacters, searchCharacters } from "../api/rickymorty.api";
import { FiSearch } from "react-icons/fi";
import Pagination from "../components/Pagination";
import CharacterCard from "../components/CharactersCard";

export function CharactersList() {
  const { page } = useParams();
  const [characters, setCharacters] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {

    async function loadCharacters() {
      try {
        let res;
    
        if (search.trim() === "") {
          res = await getCharacters(page);
        } else {
          res = await searchCharacters(search, page);
        }
    
        if (res && res.results && res.info) {
          setCharacters(res.results);
          setMaxPage(res.info.pages);
        } else {
          console.error("Invalid response format:", res);
        }
      } catch (error) {
        console.error("Error loading characters:", error);
      }
    }
    
    loadCharacters();
  }, [page, search]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  return (
    <main className="mt-5">
      <div className="w-full flex items-center rounded-md gap-3 mb-3">
        <span className="material-symbols-outlined"><FiSearch /></span>
        <input
          type="text"
          placeholder="Search for a character"
          className="flex-1 bg-transparent outline-none text-white"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {characters.length === 0 && (
        <p className="text-white">No characters found for the given search term.</p>
      )}
      {characters && (
        <section className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </section>
      )}
      <section className="flex items-center justify-center">
        <Pagination page={parseInt(page, 10)} maxPage={maxPage} />
      </section>
    </main>
  );
}
