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
  selectedWeekLabel: string;
}

// Get the highest week number
const highestWeekNumber = Math.max(...WEEKS.map(week => week.week));

// Create the store
const useCharacter = create<CharacterState>((set) => ({
  selectedLanes: [],
  selectedRoles: [],
  searchQuery: "",
  selectedWeek: highestWeekNumber,
  selectedWeekCharacters: WEEKS.find(week => week.week === highestWeekNumber)?.characters || [],
  selectedWeekLabel: "Current Patch",

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

  setSelectedWeek: (week) => set((state) => {
    const newLabel = week === highestWeekNumber ? "Current Patch" : `Week ${week}`;
    return { 
      selectedWeek: week,
      selectedWeekLabel: newLabel
    };
  }),

  setSelectedWeekCharacters: (weekNumber) => set((state) => ({
    selectedWeekCharacters: WEEKS.find(week => week.week === weekNumber)?.characters || []
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
