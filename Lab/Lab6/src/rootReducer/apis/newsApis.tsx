// This can be inside your component or in a separate API utility file
export async function fetchNews() {
  try {
    const response = await fetch('http://localhost:5500/news');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch news:', error);
    throw error;
  }
}