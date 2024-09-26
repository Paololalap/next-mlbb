"use client";

import { MLCharacterListWrapper } from "@/components/MLCharacterListWrapper";
import { useCharacter } from "@/stores/useCharacter";

export default function TierListPage() {
  const { selectedWeekCharacters } = useCharacter();

  return (
    <main>
      <MLCharacterListWrapper
        characters={selectedWeekCharacters}
        title="Mobile Legends Meta Characters"
        toggleWeeks={true}
      />
    </main>
  );
}
