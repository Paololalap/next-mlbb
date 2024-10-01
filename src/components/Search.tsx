"use client";

import { Search as SearchIcon, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useRef } from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: SearchProps) => {
  // Add a ref for the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to clear input and focus
  const handleClear = () => {
    onChange("");
    // Focus on the input after clearing
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full lg:w-auto">
      <SearchIcon className="absolute left-2 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="lg:w-fit w-full bg-accent pl-8"
        ref={inputRef} // Add ref to the Input component
      />
      {value && (
        <X
          onClick={handleClear} // Use the new handleClear function
          className="absolute right-2 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground transition-all hover:text-white"
        />
      )}
    </div>
  );
};

export { Search };
