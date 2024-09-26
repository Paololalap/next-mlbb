"use client";

import { MLCharacterList } from "@/components/MLCharacterList";
import { useCharacter } from "@/stores/useCharacter";
import { cloneElement, useMemo } from "react";

const MLCharacterListWrapper = ({
  title,
  toggleWeeks,
}: {
  title: string;
  toggleWeeks: boolean;
}) => {
  // Destructure values from useCharacter hook
  const { characters, selectedLanes, selectedRoles, searchQuery } =
    useCharacter();

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
      // Create an object with key and element properties
      key: character._id,
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
