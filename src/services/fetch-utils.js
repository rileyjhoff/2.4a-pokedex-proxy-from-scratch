export async function getPokemon() {
  const rawResponse = await fetch(`/.netlify/functions/pokemon`);
  const data = await rawResponse.json();

  return data;
}
