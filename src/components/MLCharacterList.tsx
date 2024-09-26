import Image from "next/image";

import { Search } from "@/components/Search";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { LANES } from "@/constants/LANES";
import { ROLES } from "@/constants/ROLES";
import { WEEKS } from "@/constants/WEEKS";
import { laneMapping, useCharacter } from "@/stores/useCharacter";

interface MLCharacterListProps {
  children: React.ReactNode;
  title: string;
  toggleWeeks: boolean;
}

const MLCharacterList = ({
  children,
  title,
  toggleWeeks = false,
}: MLCharacterListProps) => {
  const {
    selectedLanes,
    selectedRoles,
    searchQuery,
    selectedWeek,
    toggleLane,
    toggleRole,
    setSearchQuery,
    setSelectedWeek,
  } = useCharacter();

  return (
    <main>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {toggleWeeks && (
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(Number(e.target.value))}
              className="rounded-md border border-input px-2 py-1"
            >
              {WEEKS.map((week) => (
                <option key={week.week} value={week.week}>
                  Week {week.week}
                </option>
              ))}
            </select>
          )}
          <Search value={searchQuery} onChange={setSearchQuery} />
        </CardHeader>
        <CardContent>
          <div className="flex h-8 items-center justify-center gap-x-5">
            <ul className="flex gap-x-2">
              {LANES.map((lane) => (
                <li key={lane.title} className="size-10">
                  <Toggle
                    className="relative size-full border border-input"
                    title={lane.title}
                    pressed={selectedLanes.includes(
                      laneMapping[lane.title as keyof typeof laneMapping],
                    )}
                    onPressedChange={() => toggleLane(lane.title)}
                  >
                    <Image src={lane.src} fill alt={lane.alt} className="p-2" />
                  </Toggle>
                </li>
              ))}
            </ul>

            <Separator orientation="vertical" />

            <ul className="flex gap-x-2">
              {ROLES.map((role) => (
                <li key={role.title} className="size-10">
                  <Toggle
                    className="relative size-full border border-input"
                    title={role.title}
                    pressed={selectedRoles.includes(role.title.toLowerCase())}
                    onPressedChange={() => toggleRole(role.title)}
                  >
                    <Image src={role.src} fill alt={role.alt} />
                  </Toggle>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <div className="grid grid-cols-8 gap-4">{children}</div>
        </CardFooter>
      </Card>
    </main>
  );
};

export { MLCharacterList };
