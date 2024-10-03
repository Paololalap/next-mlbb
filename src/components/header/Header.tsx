"use client";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <header
      className={cn("mx-auto mb-10 md:max-w-2xl lg:max-w-full", className)}
    >
      <ul className="flex gap-x-1">
        <li>
          <Link href="/">
            <Button
              variant="ghost"
              className={cn("text-lg", pathname === "/" && "bg-accent")}
            >
              Characters
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/tier-list">
            <Button
              variant="ghost"
              className={cn(
                "text-lg",
                pathname === "/tier-list" && "bg-accent",
              )}
            >
              Tier List
            </Button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export { Header };
