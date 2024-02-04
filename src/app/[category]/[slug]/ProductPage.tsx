"use client";
import { Dock } from "@/components/Dock";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import { Skeleton } from "@/components/ui/skeleton";
import useCards from "@/hooks/useCards";
import { useProducts } from "@/hooks/useProducts";
import useDocumentTitle from "@/hooks/useTitle";
import {
  ArrowElbowUpLeft,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const getFeatureds = (selectedItem: string) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between py-2 border-b border-[#363636]">
        <p className="text-[14px] text-[#888888]">Technology</p>
        <p className="text-[14px] text-[#888888]">{selectedItem[16]}</p>
      </div>
      <div className="flex items-center justify-between py-2 border-b border-[#363636]">
        <p className="text-[14px] text-[#888888]">Responsive</p>
        <p className="text-[14px] text-[#888888]">
          {Number(selectedItem[18]) == 1 ? "Yes" : "No"}
        </p>
      </div>
      <div className="flex items-center justify-between py-2 border-b border-[#363636]">
        <p className="text-[14px] text-[#888888]">Use Cases</p>
        <p className="text-[14px] text-[#888888]">{selectedItem[17]}</p>
      </div>
      <div className="flex items-center justify-between py-2 gap-8 border-b border-[#363636]">
        <p className="text-[14px] text-[#888888]">Pages</p>
        <p className="text-[14px] text-[#888888]">{selectedItem[19]}</p>
      </div>
    </div>
  );
};

function ProductPage() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/")[2];
  const category = pathname.split("/")[1];
  const controls = useAnimation();
  const { products } = useProducts();
  const selectedItem = products.find((item) => item[6] === currentSlug);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const limitedTiltValue = scrollY >= 40 ? 40 : scrollY;
    controls.start({
      transform: `perspective(1000px) rotateX(${
        40 - limitedTiltValue
      }deg) rotateY(0deg)`,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [blurScrollY, setBlurScrollY] = useState(0);
  useEffect(() => {
    const handleBlurScroll = () => {
      setBlurScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleBlurScroll);

    return () => {
      window.removeEventListener("scroll", handleBlurScroll);
    };
  }, []);

  const blurValue = blurScrollY >= 200 ? 2 : 0;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "380%"]);

  return (
    <div>
      <TopBar />
      <Navbar />

      {selectedItem ? (
        <>
          <Layout
            ref={ref}
            className="relative pt-[150px] overflow-hidden hidden lg:block"
          >
            <motion.div
              style={{
                y: textY,
                filter: `blur(${blurValue}px`,
                transition: "filter 0.3s ease-out",
              }}
            >
              <div className="flex justify-center pb-2">
                <Link
                  className="px-4 rounded-full border border-[#5757574d] text-[14px] leading-6 flex items-center gap-1 text-[#5C626E]"
                  href={`/${category.toLowerCase()}`}
                >
                  <ArrowLeft weight="bold" color="rgb(107 114 128)" size={14} />
                  {selectedItem[1]}
                </Link>
              </div>
              <h1
                className="text-[35px] lg:text-[45px] font-semibold text-[#f6f6f6] image-text grotesk z-10 text-center"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, rgb(143, 151, 168) 0%, rgb(255, 255, 255) 100%)",
                }}
              >
                {selectedItem[2]}
              </h1>
              <p className="text-center mx-auto text-[18px] w-[800px] text-gray-500">
                {selectedItem[5]}
              </p>
              <div className="flex items-center justify-center gap-2 mt-10">
                {selectedItem && (
                  <Link target="_blank" href={selectedItem[7] ?? ""}>
                    <Button variant="styled">
                      {selectedItem[8]}
                      <ArrowRight size={18} className="ml-1" weight="bold" />
                    </Button>
                  </Link>
                )}
                {selectedItem && (
                  <Link target="_blank" href={selectedItem[9] ?? ""}>
                    <Button variant="outline">
                      {selectedItem[10]}
                      <ArrowUpRight
                        size={18}
                        color="#ffffff"
                        className="ml-1"
                        weight="bold"
                      />
                    </Button>
                  </Link>
                )}
              </div>
              <div className="flex items-center justify-center flex-col gap-2 mt-8">
                <p className="text-[14px] text-gray-500">
                  Rated {selectedItem[11]} by {selectedItem[12]}+ people
                </p>
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  <Image
                    className=" border-2 border-[#2a2a2a] rounded-full dark:border-gray-800"
                    src="/assets/pfp.jpg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <Image
                    className=" border-2 border-[#2a2a2a] rounded-full dark:border-gray-800"
                    src="/assets/pfp.jpg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <Image
                    className=" border-2 border-[#2a2a2a] rounded-full dark:border-gray-800"
                    src="/assets/pfp.jpg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <div className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-[#757575] border-2 border-[#2a2a2a] rounded-full hover:bg-[#373737] dark:border-gray-800">
                    +{Number(selectedItem[42]) > 99 ? "99" : "9"}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="mt-14">
              <motion.div
                animate={controls}
                className="card-page-thumbnail"
                style={{
                  aspectRatio: "16/9",
                  position: "relative",
                }}
              >
                <Image
                  src={selectedItem[4] ?? ""}
                  alt={selectedItem[2] ?? ""}
                  fill={true}
                  loading="lazy"
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              </motion.div>
            </div>
          </Layout>
          <Layout
            className="relative 
        grid-cols-1 lg:grid-cols-[1fr,450px] pb-8 pt-14 hidden lg:grid"
          >
            <div className="lg:pr-4 text-[#888888]">
              <h2 className="text-[36px] font-[700] leading-[42px] text-[#ededed] py-2">
                Overview
              </h2>
              {React.createElement("div", {
                dangerouslySetInnerHTML: { __html: selectedItem[15] },
              })}
            </div>
            <div className="lg:pl-4">
              <div className=" lg:pr-4 lg:sticky top-[80px]">
                <h2 className="text-[36px] font-[700] leading-[42px] text-[#ededed] py-2">
                  Features
                </h2>
                {getFeatureds(selectedItem)}
                <div className="grid grid-cols-2 gap-2 mt-8">
                  {selectedItem && (
                    <Link target="_blank" href={selectedItem[7] ?? ""}>
                      <Button variant="styled" className="w-full">
                        {selectedItem[8]}
                        <ArrowRight size={18} className="ml-1" weight="bold" />
                      </Button>
                    </Link>
                  )}
                  {selectedItem && (
                    <Link target="_blank" href={selectedItem[9] ?? ""}>
                      <Button variant="outline" className="w-full">
                        {selectedItem[10]}
                        <ArrowUpRight
                          size={18}
                          color="#ffffff"
                          className="ml-1"
                          weight="bold"
                        />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Layout>
        </>
      ) : (
        <div className="flex flex-col justify-center mt-10 items-center gap-6">
          <Skeleton className="w-[60%] h-20 rounded" />
          <Skeleton className="w-[40%] h-20 rounded" />
          <Skeleton className="w-[20%] h-20 rounded" />
          <Skeleton className="w-[50%] h-[500px] rounded" />
        </div>
      )}

      {/* --------------- Mobile Below --------------- */}

      {selectedItem && (
        <div>
          <Layout className="border-b border-[#5757574d] block lg:hidden">
            <Link
              href={`/${category.toLowerCase()}`}
              className="inline-flex items-center gap-1 h-[60px]"
            >
              <ArrowElbowUpLeft size={20} color="#ffffff" weight="bold" />
              <p>{selectedItem[1]}</p>
            </Link>
          </Layout>
          <Layout
            className="relative  grid lg:hidden 
        grid-cols-1 pb-8"
          >
            <div className="pt-4">
              <div
                style={{
                  aspectRatio: "4/3",
                  position: "relative",
                }}
              >
                <Image
                  src={selectedItem[4] ?? ""}
                  alt=""
                  fill={true}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              </div>
            </div>
            <div className="lg:border-r border-[#363636] py-4 lg:pr-4 lg:sticky top-0">
              <h2 className="text-[36px] font-[700] leading-[42px] text-[#ededed] pb-2 pt-4">
                {selectedItem[2]}
              </h2>
              <p className="text-[#888888]">{selectedItem[5]}</p>
              <div className="grid grid-cols-1 gap-2 mt-4">
                {selectedItem[7] && (
                  <Link target="_blank" href={selectedItem[7] ?? ""}>
                    <Button variant="styled" className="w-full">
                      {selectedItem[8]}
                      <ArrowRight size={18} className="ml-1" weight="bold" />
                    </Button>
                  </Link>
                )}
                {selectedItem[9] && (
                  <Link target="_blank" href={selectedItem[9] ?? ""}>
                    <Button variant="outline" className="w-full">
                      {selectedItem[10]}
                      <ArrowUpRight
                        size={18}
                        color="#ffffff"
                        className="ml-1"
                        weight="bold"
                      />
                    </Button>
                  </Link>
                )}
              </div>
              {getFeatureds(selectedItem)}
            </div>
            <div>
              <h2 className="text-[24px] font-[700] text-[#ededed] py-2">
                Overview
              </h2>
              <div className="product-content text-[#888888]">
                {React.createElement("div", {
                  dangerouslySetInnerHTML: { __html: selectedItem[15] },
                })}
              </div>
            </div>
          </Layout>
        </div>
      )}

      <Footer />
      <Dock />
    </div>
  );
}

export default ProductPage;
