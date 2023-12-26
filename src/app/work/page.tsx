"use client";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";
import Script from "next/script";
import React from "react";

// export const metadata: Metadata = {
//   title: "Work with Rokan | Rokan Tech",
//   description:
//     "Hire Rokan. He is a Full-Stack Developer, specialized in NextJS and Framer.",
// };

const WorkPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto border-x pb-[100px] relative holds-the-iframe ">
        <iframe
          title="Let's work together"
          data-tally-src="https://tally.so/embed/3NXMgp?alignLeft=1&hideTitle=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="100"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        ></iframe>
        <Script src="https://tally.so/widgets/embed.js"></Script>
      </div>
      <Footer />
      <Dock />
    </div>
  );
};

export default WorkPage;
