"use client";
import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Briefcase, Cube, Rocket } from "@phosphor-icons/react";
import useCards from "@/hooks/useCards";

export function SearchDialog({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) {
  const [query, setQuery] = React.useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  React.useEffect(() => {
    setOpen(false);
  }, [search]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const { myCards } = useCards();
  const selectedResults = query
    ? myCards.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a search..."
          value={query}
          onValueChange={(heading) => setQuery(heading)}
          handleButton={handleSubmit}
        />
        <CommandList>
          <CommandGroup>
            {selectedResults &&
              selectedResults.map((item) => (
                <Link key={item.slug} href={`/${item.category}/${item.slug}`}>
                  <CommandItem>
                    <Rocket className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </CommandItem>
                </Link>
              ))}
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Trending">
            <Link href="/search?q=Linkup">
              <CommandItem>
                <Rocket className="mr-2 h-4 w-4" />
                <span>Linkup</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Popular">
            <CommandItem>
              <Cube className="mr-2 h-4 w-4" />
              <span>Templates</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Work</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
