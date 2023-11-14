export async function getCharacters(page) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    const json =JSON.stringify(data.results)
    const obj = JSON.parse(json);
    return obj;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}
