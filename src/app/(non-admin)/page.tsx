import { MLCharacterListWrapper } from "@/components/MLCharacterListWrapper";

export async function getCharacters() {
  const res = await fetch("http://localhost:3000/api/characters");
  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }
  const data = await res.json();
  return data.characters;
}

export default async function Homepage() {
  const characters = await getCharacters();

  return (
    <MLCharacterListWrapper
      initialCharacters={characters}
      title="Mobile Legends Characters List"
    />
  );
}
