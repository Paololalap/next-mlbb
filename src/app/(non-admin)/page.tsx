"use client";

import { useState, useEffect } from "react";
import { MLCharacterList } from "@/components/MLCharacterList";
import { Search } from "@/components/Search";

interface Character {
  _id: string;
  name: string;
  role: string[];
  lane: string[];
}

async function getCharacters(): Promise<Character[]> {
  const res = await fetch("http://localhost:3000/api/characters");
  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }
  const data = await res.json();
  return data.characters as Character[];
}

const laneMapping = {
  "Gold Lane": "gold",
  "Exp Lane": "exp",
  "Mid Lane": "mid",
  "Roamer": "roam",
  "Jungler": "jungle"
};

export default function Homepage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedLanes, setSelectedLanes] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const fetchedCharacters = await getCharacters();
        setCharacters(fetchedCharacters);
      } catch (error) {
        setError("Error loading characters. Please try again later.");
        console.error("Error fetching characters:", error);
      }
    }
    fetchCharacters();
  }, []);

  const toggleLane = (laneTitle: string) => {
    const apiLaneValue = laneMapping[laneTitle as keyof typeof laneMapping];
    setSelectedLanes((prev) =>
      prev.includes(apiLaneValue)
        ? prev.filter((l) => l !== apiLaneValue)
        : [...prev, apiLaneValue]
    );
  };

  const toggleRole = (roleTitle: string) => {
    const apiRoleValue = roleTitle.toLowerCase();
    setSelectedRoles((prev) =>
      prev.includes(apiRoleValue)
        ? prev.filter((r) => r !== apiRoleValue)
        : [...prev, apiRoleValue]
    );
  };

  const filteredCharacters = characters.filter((character) =>
    (selectedLanes.length === 0 || selectedLanes.every(lane => character.lane.includes(lane))) &&
    (selectedRoles.length === 0 || selectedRoles.every(role => character.role.includes(role))) &&
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MLCharacterList 
      title="Mobile Legends Characters List"
      onLaneToggle={toggleLane}
      selectedLanes={selectedLanes}
      laneMapping={laneMapping}
      onRoleToggle={toggleRole}
      selectedRoles={selectedRoles}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      {filteredCharacters.map((character) => (
        <li
          key={character._id}
          className="grid aspect-square w-full list-none place-items-center rounded-md border p-2 capitalize break-all"
        >
          {character.name}
        </li>
      ))}
    </MLCharacterList>
  );
}
