"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

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
  const { selectedLanes, selectedRoles, searchQuery, selectedWeek } =
    useCharacter();

  // Add this new state
  const [uniqueCharacters, setUniqueCharacters] = useState<Character[]>([]);

  // Add this useEffect hook
  useEffect(() => {
    const uniqueChars = characters.reduce(
      (acc, char) => {
        const uniqueId = `${char.name}-${char.lane.join("-")}`;
        if (!acc.some((c) => c.uniqueId === uniqueId)) {
          acc.push({ ...char, uniqueId });
        }
        return acc;
      },
      [] as (Character & { uniqueId: string })[],
    );
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

  const getTierForCharacter = useCallback(
    (character: Character, weekData: (typeof WEEKS)[0]) => {
      const characterData = weekData.characters.find(
        (c) =>
          c.name.toLowerCase() === character.name.toLowerCase() &&
          c.lane.every((lane) => character.lane.includes(lane)),
      );
      if (characterData) {
        switch (characterData.tierScore) {
          case 5:
            return "SSS";
          case 4:
            return "SS";
          case 3:
            return "S";
          case 2:
            return "A";
          default:
            return "B";
        }
      }
      return "B";
    },
    [],
  );

  const tierLists = useMemo(() => {
    const tiers: { [key: string]: Character[] } = {
      SSS: [],
      SS: [],
      S: [],
      A: [],
      B: [],
    };

    const weekData = WEEKS.find((week) => week.week === selectedWeek);
    if (weekData) {
      filteredCharacters.forEach((character) => {
        const tier = getTierForCharacter(character, weekData);
        tiers[tier].push(character);
      });
    }

    return tiers;
  }, [filteredCharacters, selectedWeek, getTierForCharacter]);

  return (
    <MLCharacterList title={title} toggleWeeks={toggleWeeks}>
      {tierList ? (
        <div className="w-full space-y-2 rounded-lg bg-secondary p-2">
          {Object.entries(tierLists).map(([tier, characters]) => (
            <div key={tier} className="flex gap-x-2">
              <div
                className={`${TIER_COLORS[tier as keyof typeof TIER_COLORS]} flex min-h-[92.75px] min-w-16 items-center justify-center rounded-lg text-2xl font-bold text-black`}
              >
                {tier}
              </div>
              <div className="grid w-full grid-cols-2 gap-2 rounded-lg bg-secondary min-[475px]:grid-cols-4 sm:grid-cols-5 lg:grid-cols-8">
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
          <div className="grid grid-cols-3 gap-2 min-[475px]:grid-cols-5 lg:grid-cols-8">
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
      )}
    </MLCharacterList>
  );
};

export { MLCharacterListWrapper };
