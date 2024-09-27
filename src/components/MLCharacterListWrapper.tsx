"use client";

import { MLCharacterList } from "@/components/MLCharacterList";
import { useCharacter } from "@/stores/useCharacter";
import { cloneElement, useMemo } from "react";
import Image from 'next/image';
import { LANES } from '@/constants/LANES';

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
    return filteredCharacters.map((character, index) => ({
      key: index, 
      element: (
        <li className="relative grid w-full p-2 capitalize break-all list-none border rounded-md aspect-square place-items-center">
          {character.name}
          <div className="absolute top-0 right-0 size-5 bg-black/50">
            <Image
              src={LANES.find(lane => character.lane.includes(lane.apiValue))?.src || ''}
              alt={LANES.find(lane => character.lane.includes(lane.apiValue))?.alt || ''}
              className=''
              fill
            />
          </div>
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
