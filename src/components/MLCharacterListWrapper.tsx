"use client";

import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence mode="sync">
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full space-y-2 rounded-lg bg-transparent p-2"
          >
            {Object.entries(tierLists).map(([tier, characters]) => (
              <motion.div
                key={tier}
                layout
                transition={{ duration: 0.3 }}
                className="flex gap-x-2"
              >
                <motion.div
                  layout
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    layout: { duration: 0.3 },
                  }}
                  className={`${TIER_COLORS[tier as keyof typeof TIER_COLORS]} flex min-h-[92.75px] min-w-16 items-center justify-center rounded-lg text-2xl font-bold text-black`}
                >
                  {tier}
                </motion.div>
                <motion.div
                  layout
                  transition={{ duration: 0.3 }}
                  className="grid w-full grid-cols-2 gap-2 rounded-lg bg-secondary min-[475px]:grid-cols-4 sm:grid-cols-5 lg:grid-cols-8"
                >
                  {characters.map((character) => (
                    <motion.div
                      key={`${character.name}-${character.lane.join("-")}`}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
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
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full rounded-lg"
        >
          <motion.div
            layout
            className="grid grid-cols-3 gap-2 min-[475px]:grid-cols-5 lg:grid-cols-8"
          >
            <AnimatePresence>
              {filteredCharacters.map((character, index) => (
                <motion.div
                  key={`${character.name}-${character.lane.join("-")}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  layout
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
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </MLCharacterList>
  );
};

export { MLCharacterListWrapper };
