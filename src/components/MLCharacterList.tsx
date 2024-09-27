"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    setSelectedWeekCharacters,
  } = useCharacter();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleWeekChange = (weekNumber: number) => {
    setSelectedWeek(weekNumber);
    setSelectedWeekCharacters(weekNumber);
    setIsOpen(false);
  };

  return (
    <main>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {toggleWeeks && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>Week {selectedWeek}</span>
                <ChevronDown className="w-4 h-4 opacity-50" />
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-1 w-[180px] rounded-md border border-input bg-popover text-popover-foreground shadow-md">
                  <ul className="py-1">
                    {WEEKS.map((week) => (
                      <li
                        key={week.week}
                        className="cursor-pointer px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => handleWeekChange(week.week)}
                      >
                        Week {week.week}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          <Search value={searchQuery} onChange={setSearchQuery} />
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-8 gap-x-5">
            <ul className="flex gap-x-2">
              {LANES.map((lane) => (
                <li key={lane.title} className="size-10">
                  <Toggle
                    className="relative border size-full border-input"
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
                    className="relative border size-full border-input"
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
          <div className="grid w-full grid-cols-8 gap-4">{children}</div>
        </CardFooter>
      </Card>
    </main>
  );
};

export { MLCharacterList };
