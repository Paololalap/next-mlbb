"use client";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="mb-10">
      <ul className="flex gap-x-1">
        <li>
          <Button
            variant="ghost"
            className={cn("text-lg", pathname === "/" && "bg-accent")}
          >
            Characters
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            className={cn("text-lg", pathname === "/tier-list" && "bg-accent")}
          >
            Tier List
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            className={cn("text-lg", pathname === "/about" && "bg-accent")}
          >
            About
          </Button>
        </li>
      </ul>
    </header>
  );
};

export { Header };
