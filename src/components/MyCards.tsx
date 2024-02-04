"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useCards from "@/hooks/useCards";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "./ui/skeleton";

interface CursorFunctions {
  setCursorText: (text: string) => void;
  setCursorVariant: (variant: string) => void;
}

export function MyCards({ setCursorText, setCursorVariant }: CursorFunctions) {
  const { products } = useProducts();
  const allCategories = products.map((card) => card[1]);
  function onlyUnique(value: any, index: any, array: string | any[]) {
    return array.indexOf(value) === index;
  }
  const uniqueCategories = allCategories.filter(onlyUnique);
  const [selectedTab, setSelectedTab] = useState("Template");

  // -------------- For Cursors --------------
  function projectEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <div className="pb-8">
      <Tabs defaultValue={selectedTab} className="w-full">
        <TabsList className="flex items-center gap-4">
          {uniqueCategories?.map((card) => (
            <TabsTrigger
              key={card}
              value={card}
              onClick={() => setSelectedTab(card)}
            >
              {card}
            </TabsTrigger>
          ))}
        </TabsList>
        {products ? (
          uniqueCategories.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="grid grid-cols-1 gap-[20px] md:grid-cols-3"
            >
              {products
                .filter((cardCategory) => cardCategory[1] === selectedTab)
                .map((card) => (
                  <Card
                    key={card[2]}
                    card={card}
                    projectEnter={projectEnter}
                    projectLeave={projectLeave}
                  />
                ))}
            </TabsContent>
          ))
        ) : (
          <Skeleton className="w-[30%] h-[200px]" />
        )}

        <div className="flex justify-center mt-8">
          <Link
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
            href={`/${selectedTab.toLowerCase()}`}
            className="project font-[500] border-b-2 border-white flex text-center pb-1 gap-1 items-center"
          >
            View all {selectedTab}
            <ArrowUpRight size={20} color="#ffffff" weight="bold" />
          </Link>
        </div>
      </Tabs>
    </div>
  );
}
