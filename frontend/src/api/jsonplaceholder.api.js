export async function getColors() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    const colors = data.slice(0, 826).map((item) => item.url.substr(-6));
    return colors;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
}

export async function getColorsById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await response.json();
    return data.url.substr(-6);
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
}
