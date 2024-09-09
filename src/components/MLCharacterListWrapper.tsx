"use client";

import { MLCharacterList } from "@/components/MLCharacterList";
import { useCallback, useMemo, useState } from "react";

interface Character {
  _id: string;
  name: string;
  role: string[];
  lane: string[];
}

const laneMapping = {
  "Gold Lane": "gold",
  "Exp Lane": "exp",
  "Mid Lane": "mid",
  Roamer: "roam",
  Jungler: "jungle",
};

const MLCharacterListWrapper = ({
  initialCharacters,
}: {
  initialCharacters: Character[];
}) => {
  const [characters] = useState<Character[]>(initialCharacters);
  const [selectedLanes, setSelectedLanes] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleLane = useCallback((laneTitle: string) => {
    const apiLaneValue = laneMapping[laneTitle as keyof typeof laneMapping];
    setSelectedLanes((prev) =>
      prev.includes(apiLaneValue)
        ? prev.filter((l) => l !== apiLaneValue)
        : [...prev, apiLaneValue],
    );
  }, []);

  const toggleRole = useCallback((roleTitle: string) => {
    const apiRoleValue = roleTitle.toLowerCase();
    setSelectedRoles((prev) =>
      prev.includes(apiRoleValue)
        ? prev.filter((r) => r !== apiRoleValue)
        : [...prev, apiRoleValue],
    );
  }, []);

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

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const characterListItems = useMemo(() => {
    return filteredCharacters.map((character) => (
      <li
        key={character._id}
        className="grid aspect-square w-full list-none place-items-center break-all rounded-md border p-2 capitalize"
      >
        {character.name}
      </li>
    ));
  }, [filteredCharacters]);

  return (
    <MLCharacterList
      title="Mobile Legends Characters List"
      onLaneToggle={toggleLane}
      selectedLanes={selectedLanes}
      laneMapping={laneMapping}
      onRoleToggle={toggleRole}
      selectedRoles={selectedRoles}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
    >
      {characterListItems}
    </MLCharacterList>
  );
};

export { MLCharacterListWrapper };
