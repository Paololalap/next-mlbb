"use client";

import { MLCharacterList } from "@/components/MLCharacterList";
import { useCharacter } from "@/stores/useCharacter";
import { cloneElement, useMemo } from "react";

interface Character {
  _id?: string;
  name: string;
  role: string[];
  lane: string[];
}

const MLCharacterListWrapper = ({
  title,
  toggleWeeks,
  characters,
}: {
  title: string;
  toggleWeeks: boolean;
  characters: Character[];
}) => {
  // Destructure values from useCharacter hook
  const { selectedLanes, selectedRoles, searchQuery } = useCharacter();

  const filteredCharacters = useMemo(() => {
    return characters.filter(
      (character) =>
        (selectedLanes.length === 0 ||
          selectedLanes.every((lane) => character.lane.includes(lane))) &&
        (selectedRoles.length === 0 ||
          selectedRoles.every((role) => character.role.includes(role))) &&
        character.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [characters, selectedLanes, selectedRoles, searchQuery]);

  const characterListItems = useMemo(() => {
    return filteredCharacters.map((character) => ({
      key: character.name, 
      element: (
        <li className="grid aspect-square w-full list-none place-items-center break-all rounded-md border p-2 capitalize">
          {character.name}
        </li>
      ),
    }));
  }, [filteredCharacters]);

  return (
    <MLCharacterList title={title} toggleWeeks={toggleWeeks}>
      {characterListItems.map(({ key, element }) =>
        cloneElement(element, { key }),
      )}
    </MLCharacterList>
  );
};

export { MLCharacterListWrapper };
