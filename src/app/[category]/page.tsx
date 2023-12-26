"use client";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import useCards from "@/hooks/useCards";
import { ArrowElbowUpLeft, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function CategoryPage() {
  const pathname = usePathname();
  const { myCards } = useCards();

  const searchedCards = myCards.filter(
    (cards) => cards.category.toLowerCase() === pathname.slice(1)
  );

  return (
    <div
      className="flex justify-between flex-col "
      style={{ minHeight: "100vh" }}
    >
      <div>
        <TopBar />
        <Navbar />
        <Layout className="border-b border-x border-[#3636368c] ">
          <Link href="/" className="inline-flex items-center gap-1 h-[60px]">
            <ArrowElbowUpLeft size={20} color="#ffffff" weight="bold" />
            <p>Home</p>
          </Link>
        </Layout>
        <Layout className="relative py-4 pb-[50px] border-x border-b border-[#3636368c] ">
          <div className="flex gap-2 mb-4">
            <h2 className="text-[36px] capitalize">{pathname.slice(1)}</h2>
            <p className="text-[12px] text-gray-400">
              {searchedCards.length} items
            </p>
          </div>
          {searchedCards.length !== 0 ? (
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
              {searchedCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#1A1A1A] border border-[#242424] rounded-[8px]"
                >
                  <Link href={`/${card.category}/${card.slug}`}>
                    <div
                      style={{
                        aspectRatio: "4/3",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill={true}
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <span className="text-[12px] text-gray-400">
                      {card.category}
                    </span>
                    <p className="text-[20px] font-[600] leading-[24px] pt-2 text-[#EDEDED]">
                      {card.title}
                    </p>
                  </div>
                  <div className="p-4 border-t border-[#363636] flex items-center justify-between">
                    <div className="flex items-center">
                      <p
                        className={`text-[20px] font-[700] ${
                          card.isFree && "text-[#E73621]"
                        }`}
                      >
                        {card.isFree ? "Free" : card.price}
                      </p>
                      <sup className="text-[10px] pl-[1px]">
                        {!card.isFree && "USD"}
                      </sup>
                    </div>
                    <Link
                      href={`/${card.category}/${card.slug}`}
                      className="flex items-center"
                    >
                      <p className="text-[12px] font-[600] pr-[6px]">
                        View Product
                      </p>
                      <ArrowRight size={16} color="#ffffff" weight="bold" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4 flex-col w-full h-[300px]">
              <p>
                Apologies, but there are currently no items available in this
                category.
              </p>
              <Link href="/">
                <Button>Return to home</Button>
              </Link>
            </div>
          )}
        </Layout>
      </div>
      <Footer />
      <Dock />
    </div>
  );
}

export default CategoryPage;
