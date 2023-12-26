"use client";
import React from "react";
import {
  Briefcase,
  House,
  MagnifyingGlass,
  Notebook,
} from "@phosphor-icons/react";
import Link from "next/link";
import { SearchDialog } from "./SearchDialog";
import "../app/shine.css";
import { usePathname, useRouter } from "next/navigation";

export const Dock = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/Templates");
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/Work");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const pathname = usePathname();
  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center pointer-events-none z-[999]">
        <div
          style={{
            padding: "10px 12px",
            borderRadius: "20px",
            border: "1.959px solid rgba(255, 255, 255, 0.20)",
            background:
              "linear-gradient(163deg, rgba(47, 47, 47, 0.59) 47.94%, rgba(33, 33, 33, 0.75) 77.13%)",
            backdropFilter: "blur(20px)",
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            pointerEvents: "all",
          }}
        >
          <Link href="/" aria-label="Rokan Tech Home">
            <div
              className="iosRounded dock-icon"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                filter:
                  "drop-shadow(0px 5.606438636779785px 5.606438636779785px rgba(0, 0, 0, 0.17)) drop-shadow(0px 16.819316864013672px 39.24507141113281px rgba(0, 0, 0, 0.10))",
                transition: "0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <House
                size={40}
                color="#ffffff"
                weight="duotone"
                style={{ opacity: pathname === "/" ? 0.4 : 0.2 }}
              />
            </div>
          </Link>
          <div
            onClick={() => setOpen(true)}
            className="iosRounded dock-icon"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "10px",
              filter:
                "drop-shadow(0px 5.606438636779785px 5.606438636779785px rgba(0, 0, 0, 0.17)) drop-shadow(0px 16.819316864013672px 39.24507141113281px rgba(0, 0, 0, 0.10))",
              transition: "0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <MagnifyingGlass
              size={40}
              color="#ffffff"
              weight="duotone"
              style={{ opacity: "0.2" }}
            />
          </div>
          <Link href="/blogs" aria-label="Rokan Tech Blogs">
            <div
              className="iosRounded dock-icon"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                filter:
                  "drop-shadow(0px 5.606438636779785px 5.606438636779785px rgba(0, 0, 0, 0.17)) drop-shadow(0px 16.819316864013672px 39.24507141113281px rgba(0, 0, 0, 0.10))",
                transition: "0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Notebook
                size={40}
                color="#ffffff"
                weight="duotone"
                style={{ opacity: pathname === "/blogs" ? 0.4 : 0.2 }}
              />
            </div>
          </Link>
          <Link href="/work" aria-label="Work with Rokan">
            <div
              className="iosRounded dock-icon btn btn-anim"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                filter:
                  "drop-shadow(0px 5.606438636779785px 5.606438636779785px rgba(0, 0, 0, 0.17)) drop-shadow(0px 16.819316864013672px 39.24507141113281px rgba(0, 0, 0, 0.10))",
                transition: "0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Briefcase
                size={40}
                color="#ffffff"
                weight="duotone"
                style={{ opacity: pathname === "/work" ? 0.4 : 0.2 }}
              />
            </div>
          </Link>
        </div>
      </div>
      <SearchDialog setOpen={setOpen} open={open} />
    </div>
  );
};
