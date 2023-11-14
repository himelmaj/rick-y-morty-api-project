export async function getColors() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
}
