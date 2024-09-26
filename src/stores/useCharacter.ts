import { create } from "zustand";
import { WEEKS } from '@/constants/WEEKS';

// Define the store state type
interface CharacterState {
  selectedLanes: string[];
  selectedRoles: string[];
  searchQuery: string;
  selectedWeek: number;
  toggleLane: (laneTitle: string) => void;
  toggleRole: (roleTitle: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedWeek: (week: number) => void;
  selectedWeekCharacters: typeof WEEKS[0]['characters'];
  setSelectedWeekCharacters: (weekNumber: number) => void;
}

// Create the store
const useCharacter = create<CharacterState>((set) => ({
  selectedLanes: [],
  selectedRoles: [],
  searchQuery: "",
  selectedWeek: 1,
  selectedWeekCharacters: WEEKS[0].characters,

  toggleLane: (laneTitle) =>
    set((state) => {
      const apiLaneValue = laneMapping[laneTitle as keyof typeof laneMapping];
      const newSelectedLanes = state.selectedLanes.includes(apiLaneValue)
        ? state.selectedLanes.filter((l) => l !== apiLaneValue)
        : [...state.selectedLanes, apiLaneValue];
      return { selectedLanes: newSelectedLanes };
    }),

  toggleRole: (roleTitle) =>
    set((state) => {
      const apiRoleValue = roleTitle.toLowerCase();
      const newSelectedRoles = state.selectedRoles.includes(apiRoleValue)
        ? state.selectedRoles.filter((r) => r !== apiRoleValue)
        : [...state.selectedRoles, apiRoleValue];
      return { selectedRoles: newSelectedRoles };
    }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setSelectedWeek: (week) => set({ selectedWeek: week }),

  setSelectedWeekCharacters: (weekNumber) => set((state) => ({
    selectedWeekCharacters: WEEKS.find(week => week.week === weekNumber)?.characters || WEEKS[0].characters
  })),
}));

// Export the laneMapping object
export const laneMapping = {
  "Gold Lane": "gold",
  "Exp Lane": "exp",
  "Mid Lane": "mid",
  Roamer: "roam",
  Jungler: "jungle",
};

export { useCharacter };
