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
