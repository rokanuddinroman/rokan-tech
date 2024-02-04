"use client";
import { Card } from "@/components/Card";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import useCards from "@/hooks/useCards";
import { useProducts } from "@/hooks/useProducts";
import { ArrowElbowUpLeft, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

function CategoryPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const { products } = useProducts();

  const searchedCards = products.filter((cards) => {
    return (
      search &&
      (cards[2] as string).toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div
      className="flex justify-between flex-col"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <TopBar />
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-[16px] border-x border-b border-[#3636368c] ">
          <Link href="/" className="inline-flex items-center gap-1 h-[60px]">
            <ArrowElbowUpLeft size={20} color="#ffffff" weight="bold" />
            <p>Home</p>
          </Link>
        </div>
        <div className="max-w-screen-xl mx-auto px-[16px] border-x border-[#3636368c] relative py-4 pb-[50px]">
          <div className="flex gap-2 mb-4">
            <h2 className="text-[36px]">Search for {search}</h2>
            <p className="text-[12px] text-gray-400">
              {searchedCards.length} items
            </p>
          </div>
          {searchedCards.length !== 0 ? (
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
              {searchedCards.map((card) => (
                <Card key={card[2]} card={card} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4 flex-col w-full h-[300px]">
              <p>
                Apologies, but there are currently no items available in this
                search.
              </p>
              <Link href="/">
                <Button>Return to home</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <Dock />
    </div>
  );
}

export default CategoryPage;
