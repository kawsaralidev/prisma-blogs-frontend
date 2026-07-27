"use client";

/* Search Bar */

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const searchTerm = formData.get("searchTerm")?.toString() || "";

    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm");
    }

    params.delete("page");

    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8 flex gap-3">
      <Input
        name="searchTerm"
        defaultValue={searchParams.get("searchTerm") || ""}
        placeholder="Search blogs..."
      />

      <Button type="submit">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
