import { MLCharacterListWrapper } from "@/components/MLCharacterListWrapper";
import { CHARACTERS } from "@/constants/CHARACTERS";

/* export async function getCharacters() {
  const res = await fetch("http://localhost:3000/api/characters");
  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }
  const data = await res.json();
  return data.characters;
} */

export default function Homepage() {
  // const characters = await getCharacters();

  return (
    <MLCharacterListWrapper
      title="Mobile Legends Characters List"
      characters={CHARACTERS}
      toggleWeeks={false}
      tierList={false}
    />
  );
}
