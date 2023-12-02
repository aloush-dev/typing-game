export async function getWords(length: number, amount: number) {
  const res = await fetch(`/api/words?amount=${amount}&length=${length}`);

  if (!res.ok) {
    throw new Error("Failed to fetch words");
  }
  const data = await res.json();
  return data as string[];
}



