export async function fetchQuestions() {
  try {
    const response = await fetch('http://localhost:5500/questions');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
}