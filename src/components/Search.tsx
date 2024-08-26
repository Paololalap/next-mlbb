"use client";

import { Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-fit bg-accent pl-8"
      />
      {searchValue && (
        <X
          onClick={() => setSearchValue("")}
          className="absolute right-2 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground transition-all hover:text-white"
        />
      )}
    </div>
  );
};

export { Search };
