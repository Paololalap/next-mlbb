"use client";

import { Search as SearchIcon, X } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-fit bg-accent pl-8"
      />
      {value && (
        <X
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground transition-all hover:text-white"
        />
      )}
    </div>
  );
};

export { Search };
