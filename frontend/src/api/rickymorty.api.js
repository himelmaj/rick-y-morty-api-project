export async function getCharacters(page) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    const json = JSON.stringify(data);
    const obj = JSON.parse(json);
    return obj;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

export async function getCharacterById(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    const json = JSON.stringify(data);
    const obj = JSON.parse(json);
    return obj;
  } catch (error) {
    console.error(`Error fetching character Id-${id}:`, error);
  }
}
