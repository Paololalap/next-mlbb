"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CircleHelp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

  const handleWeekChange = useCallback((weekNumber: number) => {
    setSelectedWeek(weekNumber);
    setSelectedWeekCharacters(weekNumber);
    setIsOpen(false);
  }, [setSelectedWeek, setSelectedWeekCharacters]);

  // Sort weeks in descending order
  const sortedWeeks = [...WEEKS].sort((a, b) => b.week - a.week);

  return (
    <main>
      <Card className="mx-auto md:max-w-2xl lg:max-w-full">
        <CardHeader className="flex items-center justify-between space-y-0 pb-4 lg:flex-row lg:pb-6">
          <div className="mb-2 flex w-full items-center justify-between gap-x-3 lg:mb-0 lg:w-auto">
            <CardTitle>{title}</CardTitle>
            {toggleWeeks && (
              <div className="flex gap-x-2">
                <div className="relative" ref={dropdownRef}>
                  <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-[150px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="absolute z-10 mt-2 w-[150px] rounded-md border bg-popover text-popover-foreground shadow-md"
                      >
                        {sortedWeeks.map((week) => (
                          <motion.li
                            key={week.week}
                            className="flex h-10 w-[150px] cursor-pointer items-center whitespace-nowrap px-3 text-sm hover:bg-accent hover:text-accent-foreground"
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
              </div>
            )}
          </div>
          <Search value={searchQuery} onChange={setSearchQuery} />
        </CardHeader>
        <CardContent className="pb-4 lg:pb-6">
          <div className="flex flex-col items-center justify-center gap-x-5 gap-y-1 md:flex-row md:gap-y-0">
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
