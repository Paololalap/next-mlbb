import Image from "next/image";
import { ReactNode } from "react";

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

interface MLCharacterListProps {
  children: ReactNode;
  title: string;
  onLaneToggle: (laneTitle: string) => void;
  selectedLanes: string[];
  laneMapping: Record<string, string>;
  onRoleToggle: (roleTitle: string) => void;
  selectedRoles: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const MLCharacterList = ({
  children,
  title,
  onLaneToggle,
  selectedLanes,
  laneMapping,
  onRoleToggle,
  selectedRoles,
  searchQuery,
  onSearchChange,
}: MLCharacterListProps) => {
  return (
    <main>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Search value={searchQuery} onChange={onSearchChange} />
        </CardHeader>
        <CardContent>
          <div className="flex h-8 items-center justify-center gap-x-5">
            <ul className="flex gap-x-2">
              {LANES.map((lane) => (
                <li key={lane.title} className="size-10">
                  <Toggle
                    className="relative size-full border border-input"
                    title={lane.title}
                    pressed={selectedLanes.includes(laneMapping[lane.title as keyof typeof laneMapping])}
                    onPressedChange={() => onLaneToggle(lane.title)}
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
                    onPressedChange={() => onRoleToggle(role.title)}
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
