import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CursorFunctions {
  card: any;
  projectEnter: () => void;
  projectLeave: () => void;
}

export const Card = ({ card, projectEnter, projectLeave }: CursorFunctions) => {
  return (
    <div
      className="
                bg-[#a1a1a112]
                 border border-[#242424a6] rounded-[8px]"
    >
      <Link href={`/${card.category}/${card.slug}`}>
        <div
          style={{
            aspectRatio: "4/3",
            position: "relative",
          }}
          className="project"
          onMouseEnter={projectEnter}
          onMouseLeave={projectLeave}
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
        <span className="text-[12px] text-gray-400">{card.category}</span>
        <p className="text-[20px] font-[600] leading-[24px] pt-2 text-[#EDEDED]">
          {card.title}
        </p>
      </div>
      <div className="p-4 border-t border-[#242424fe] flex items-center justify-between">
        <div className="flex items-center">
          <p
            className={`text-[20px] font-[700] ${
              card.isFree && "text-[#E73621]"
            }`}
          >
            {card.isFree ? "Free" : card.price}
          </p>
          <sup className="text-[10px] pl-[1px]">{!card.isFree && "USD"}</sup>
        </div>
        <Link
          href={`/${card.category}/${card.slug}`}
          className="flex items-center"
        >
          <p
            className="text-[12px] font-[600] pr-[6px] project"
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
          >
            View Product
          </p>
          <ArrowRight size={16} color="#ffffff" weight="bold" />
        </Link>
      </div>
    </div>
  );
};
