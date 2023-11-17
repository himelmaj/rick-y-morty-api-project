const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(page) {
  try {
    const response = await fetch(`${BASE_URL}/character/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}

export async function getCharacterById(id) {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching character Id ${id}:`, error);
    throw error;
  }
}
