import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../api/rickymorty.api";
import { getColorsById } from "../api/jsonplaceholder.api";
import skull_icon from "../assets/skull_icon.svg";
import heart_icon from "../assets/heart_icon.svg";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [colors, setColors] = useState([]);
  useEffect(() => {
    async function fetchCharacter() {
      try {
        const res = await getCharacterById(id);
        setCharacter(res);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    }

    async function fetchColors() {
      try {
        const res = await getColorsById(id);
        setColors(res);
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    }
    fetchCharacter();
    fetchColors();
  }, [id]);

  const handleSpeech = () => {
    const characterDescription = `
        This is ${character.name}. ${
      character.gender === "unknown" ? "Their" : "He/She"
    } is of gender ${character.gender}, 
        belongs to the species ${character.species}, and ${
      character.type
        ? `has a type of ${character.type}`
        : "does not have a specified type"
    }.
        Currently, ${
          character.gender === "unknown" ? "their" : "he/she"
        } resides in ${character.location.name} and hails from ${
      character.origin.name
    }.
        ${
          character.gender === "unknown" ? "They" : "He/She"
        } has appeared in a total of ${character.episode?.length || 0} episodes.
    `;
    const msg = new SpeechSynthesisUtterance(characterDescription);
    window.speechSynthesis.speak(msg);
  };

  if (!character || !character.name) {
    return (
      <Box sx={{ display: "flex", alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
    <Navigation />
        <main>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
        <img
          src={character.image}
          alt={character.name}
          className="rounded-full"
          style={{
            borderColor: `#${colors}`,
            borderWidth: "5px",
          }}
        />
        <div className="flex items-center">
          <h3 className="text-xl font-bold mr-2">Status: {character.status}</h3>
          {character.status !== "unknown" ? (
            <img
              src={character.status === "Alive" ? heart_icon : skull_icon}
              alt="status Icon"
            />
          ) : (
            <BsQuestionDiamondFill className="text-gray-700" />
          )}
        </div>
        {character.gender.length > 0 && <h4>Gender: {character.gender}</h4>}
        {character.species.length > 0 && <h4>Species: {character.species}</h4>}
        {character.type.length > 0 && <h4>Type: {character.type}</h4>}
        {character.location.name.length > 0 && (
          <h4>Location: {character.location.name}</h4>
        )}
        {character.origin.name.length > 0 && (
          <h4>Origin: {character.origin.name}</h4>
        )}
        <h4>Total episode appearances: {character.episode?.length}</h4>
        <button onClick={handleSpeech}>
          <MdOutlineRecordVoiceOver className="text-white mt-5 text-3xl" />
        </button>
      </section>
    </main>
    </>

  );
}
