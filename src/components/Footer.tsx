"use client";
import React from "react";
import Link from "next/link";
import { Layout } from "./ui/layout";
import useData from "@/hooks/useData";

const Footer = () => {
  let bangladeshTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Dhaka",
    hourCycle: "h24",
    hour: "2-digit",
    minute: "2-digit",
  });
  const { FooterSectionData } = useData();
  return (
    <div className="bg-[#E73521] text-[#131317] pb-[90px]">
      <Layout className="p-4 flex justify-between items-start flex-col md:flex-row md:items-center">
        <p style={{ fontSize: "120px" }}>{bangladeshTime}</p>
        <div className="flex flex-col">
          {FooterSectionData.Links.map((link) => (
            <Link href={link.url} className="underline" key={link.url}>
              <span>{link.title}</span>
              <svg viewBox="0 0 13 20">
                <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
              </svg>
            </Link>
          ))}
        </div>
      </Layout>
      <div className="h-[80px] border-t border-[#131317]">
        <Layout className="h-[100%] flex items-center justify-between">
          <p>
            Made by <Link href="https://twitter.com/rokantech">Rokan</Link> |
            ©2023 <Link href="https://rokan.tech">Rokan.tech</Link>
          </p>
          <div className="flex items-center gap-2">
            {FooterSectionData.socials.map((link) => (
              <Link
                href={link.url}
                key={link.url}
                target="_blank"
                aria-label={link.label}
              >
                {link.logo}
              </Link>
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Footer;
