import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "./ui/skeleton";

interface CursorFunctions {
  card: any;
  projectEnter?: () => void;
  projectLeave?: () => void;
}

export const Card = ({ card, projectEnter, projectLeave }: CursorFunctions) => {
  return (
    <div>
      {card && (
        <div
          className="
                  bg-[#a1a1a112]
                   border border-[#242424a6] rounded-[8px]"
        >
          <Link href={`/${card[1].toLowerCase()}/${card[6]}`}>
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
                src={card[3]}
                alt={card[2]}
                fill={true}
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          </Link>
          <div className="p-4">
            <span className="text-[12px] text-gray-400">{card[1]}</span>
            <p className="text-[20px] font-[600] leading-[24px] pt-2 text-[#EDEDED]">
              {card[2]}
            </p>
          </div>
          <div className="p-4 border-t border-[#242424fe] flex items-center justify-between">
            <div className="flex items-center">
              <p
                className={`text-[20px] font-[700] ${
                  Number(card[13]) && "text-[#E73621]"
                }`}
              >
                {Number(card[13]) ? "Free" : card[14]}
              </p>
              <sup className="text-[10px] pl-[1px]">
                {!Number(card[13]) && "USD"}
              </sup>
            </div>
            <Link
              href={`/${card[1].toLowerCase()}/${card[6]}`}
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
      )}
    </div>
  );
};

{
  /* <div
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
</div> */
}
