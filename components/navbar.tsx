"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const DynamicMuteSwitch = dynamic(() => import("./mute-switch"), {
  ssr: false,
});

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NextUINavbar
      // className={clsx("bg-opacity-100 backdrop-blur-sm bg-transparent")}
      className="bg-transparent p-5"
      maxWidth="2xl"
      position="sticky"
      height={80}
    >
      {/* <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="py-2" href="/">
            <Image src={"./logo.svg"} alt="" width={180} height={40} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent> */}

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <div className="flex w-48 justify-evenly bg-slate-100 p-3 rounded-full cursor-pointer">
            <div>Build</div>
            <div>Community</div>
          </div>
          <DynamicMuteSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <DynamicMuteSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
