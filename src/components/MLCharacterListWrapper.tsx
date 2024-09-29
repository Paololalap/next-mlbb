"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

import { MLCharacterList } from "@/components/MLCharacterList";
import { LANES } from "@/constants/LANES";
import { TIER_COLORS } from "@/constants/TIER_COLORS";
import { WEEKS } from "@/constants/WEEKS";
import { useCharacter } from "@/stores/useCharacter";

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
  tierList,
}: {
  title: string;
  toggleWeeks: boolean;
  characters: Character[];
  tierList: boolean;
}) => {
  // Destructure values from useCharacter hook
  const { selectedLanes, selectedRoles, searchQuery } = useCharacter();

  // Add this new state
  const [uniqueCharacters, setUniqueCharacters] = useState<Character[]>([]);

  // Add this useEffect hook
  useEffect(() => {
    const uniqueChars = characters.map(char => ({
      ...char,
      // Create a unique identifier using name and lane
      uniqueId: `${char.name}-${char.lane.join('-')}`
    }));
    setUniqueCharacters(uniqueChars);
  }, [characters]);

  const filteredCharacters = useMemo(() => {
    // Update this to use uniqueCharacters instead of characters
    return uniqueCharacters.filter(
      (character) =>
        (selectedLanes.length === 0 ||
          selectedLanes.every((lane) => character.lane.includes(lane))) &&
        (selectedRoles.length === 0 ||
          selectedRoles.every((role) => character.role.includes(role))) &&
        character.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [uniqueCharacters, selectedLanes, selectedRoles, searchQuery]);

  const tierLists = useMemo(() => {
    const tiers: { [key: string]: Character[] } = {
      SSS: [],
      SS: [],
      S: [],
      A: [],
      B: [],
    };

    filteredCharacters.forEach((character) => {
      const weekData = WEEKS.find((week) =>
        week.characters.some(
          (c) => c.name.toLowerCase() === character.name.toLowerCase() &&
                 c.lane.every(lane => character.lane.includes(lane))
        ),
      );

      if (weekData) {
        const characterData = weekData.characters.find(
          (c) => c.name.toLowerCase() === character.name.toLowerCase() &&
                 c.lane.every(lane => character.lane.includes(lane))
        );
        if (characterData) {
          switch (characterData.tierScore) {
            case 5:
              tiers.SSS.push(character);
              break;
            case 4:
              tiers.SS.push(character);
              break;
            case 3:
              tiers.S.push(character);
              break;
            case 2:
              tiers.A.push(character);
              break;
            case 1:
            default:
              tiers.B.push(character);
              break;
          }
        }
      }
    });

    return tiers;
  }, [filteredCharacters]);

  return (
    <MLCharacterList title={title} toggleWeeks={toggleWeeks}>
      {tierList ? (
        <div className="w-full space-y-2 rounded-lg bg-secondary p-2">
          {Object.entries(tierLists).map(([tier, characters]) => (
            <div key={tier} className="flex gap-x-2">
              <div
                className={`${TIER_COLORS[tier as keyof typeof TIER_COLORS]} flex min-h-16 min-w-16 items-center justify-center rounded-lg text-2xl font-bold text-black`}
              >
                {tier}
              </div>
              <div className="grid w-full grid-cols-8 gap-2 rounded-lg bg-secondary">
                {characters.map((character, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-md bg-gray-600"
                  >
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm capitalize">
                      {character.name}
                    </span>
                    <div className="absolute right-0.5 top-0.5 size-5">
                      <Image
                        src={
                          LANES.find((lane) =>
                            character.lane.includes(lane.apiValue),
                          )?.src || ""
                        }
                        alt={
                          LANES.find((lane) =>
                            character.lane.includes(lane.apiValue),
                          )?.alt || ""
                        }
                        fill
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full rounded-lg">
          <div className="grid grid-cols-8 gap-2">
            {filteredCharacters.map((character, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-md bg-secondary"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm capitalize">
                  {character.name}
                </span>
                <div className="absolute right-0.5 top-0.5 size-5">
                  <Image
                    src={
                      LANES.find((lane) =>
                        character.lane.includes(lane.apiValue)
                      )?.src || ""
                    }
                    alt={
                      LANES.find((lane) =>
                        character.lane.includes(lane.apiValue)
                      )?.alt || ""
                    }
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </MLCharacterList>
  );
};

export { MLCharacterListWrapper };
