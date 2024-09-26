import { MLCharacterListWrapper } from "@/components/MLCharacterListWrapper";
import { CHARACTERS } from "@/constants/CHARACTERS";

export default function TierListPage() {
  return (
    <main>
      <MLCharacterListWrapper
        characters={CHARACTERS}
        title="Mobile Legends Meta Characters"
        toggleWeeks={true}
      />
    </main>
  );
}
