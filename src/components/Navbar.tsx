import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Layout } from "./ui/layout";
import useData from "@/hooks/useData";

export const Navbar = () => {
  const { NavbarData } = useData();
  return (
    <nav className="h-[80px] border-b border-[#3636368c] sticky top-0 backdrop-blur-[20px] bg-[#020202be] z-[990]">
      <Layout className="h-[80px] flex justify-between items-center px-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src={NavbarData.LogoImage}
              height={38}
              width={38}
              alt=""
              className="rounded-full"
            />
            <p className="font-medium text-white text-[16px] ">
              {NavbarData.LogoText}
            </p>
          </div>
        </Link>
        <div>
          <span className="text-[13px] font-[500] flex items-center gap-2 manrope">
            search
            <div className="h-[25px] w-[25px] rounded-[4px] bg-[hsla(0,0%,100%,.1)] text-[hsla(0,0%,100%,.6)] font-[600] text-[11px] flex items-center justify-center">
              ⌘J
            </div>
          </span>
        </div>
      </Layout>
    </nav>
  );
};
