"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CircleHelp } from "lucide-react";
import Link from "next/link";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


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
    selectedWeekLabel,
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

  // Sort weeks in descending order
  const sortedWeeks = [...WEEKS].sort((a, b) => b.week - a.week);

  return (
    <main>
      <Card>
        <CardHeader className="flex flex-row justify-between space-y-0">
          <div className="flex items-center gap-x-3">
            <CardTitle>{title}</CardTitle>
            {toggleWeeks && (
              <>
                <div className="relative" ref={dropdownRef}>
                  <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-[160px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="truncate">{selectedWeekLabel}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 flex-shrink-0"
                    >
                      <ChevronDown className="size-4 opacity-50" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-2 w-[160px] rounded-md border bg-popover text-popover-foreground shadow-md"
                      >
                        {sortedWeeks.map((week) => (
                          <motion.li
                            key={week.week}
                            className="flex h-10 w-[160px] cursor-pointer items-center whitespace-nowrap px-3 text-sm hover:bg-accent hover:text-accent-foreground"
                            onClick={() => handleWeekChange(week.week)}
                          >
                            Week {week.week}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <CircleHelp className="size-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-52">
                      <p>
                        This was based on{" "}
                        <Link
                          href="https://www.youtube.com/@MPLPhilippines"
                          target="_blank"
                        >
                          MPL Philippines
                        </Link>{" "}
                        Picks and Bans
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            )}
          </div>
          <Search value={searchQuery} onChange={setSearchQuery} />
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-x-5">
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
        <CardFooter>{children}</CardFooter>
      </Card>
    </main>
  );
};

export { MLCharacterList };
