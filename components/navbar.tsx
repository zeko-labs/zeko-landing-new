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
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import Link from "next/link";

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
      className="bg-transparent backdrop-blur-sm p-5"
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
        <NavbarItem className="hidden sm:flex sm:justify-evenly sm:w-full lg:w-auto lg:gap-10 sm:gap-0">
          <ButtonGroup className="pl-7 basis-5/6">
            <Dropdown>
              <DropdownTrigger>
                <Button className="border-r-2 border-gray-50 bg-slate-200 flex">
                  Build
                  <Image
                    src="/utils/down_btn.png"
                    alt="down"
                    width={10}
                    height={10}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="faucet">
                  <Link href="/faucet">Zeko Faucet</Link>
                </DropdownItem>
                <DropdownItem key="transfer">
                  <Link href="/send">Zeko Transfer</Link>
                </DropdownItem>
                <DropdownItem key="docs">
                  <Link href="">Zeko Docs</Link>
                </DropdownItem>
                <DropdownItem key="boost">
                  <Link href="/zekoboost">Zeko Boost</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button className="border-r-2 border-gray-50 bg-slate-200 flex">
                  Community
                  <Image
                    src="/utils/down_btn.png"
                    alt="down"
                    width={10}
                    height={10}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="discord">
                  <Link href="https://discord.gg/vSDxqAchUY">Discord</Link>
                </DropdownItem>
                <DropdownItem key="telegram">
                  <Link href="https://t.me/+m8LBsR2kNTAxNmFh">Telegram</Link>
                </DropdownItem>
                <DropdownItem key="twitter">
                  <Link href="https://twitter.com/ZekoLabs">X</Link>
                </DropdownItem>
                <DropdownItem key="brand">Brand</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
          <DynamicMuteSwitch className="basis-1/6" />
        </NavbarItem>
      </NavbarContent>
      {/* 
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <DynamicMuteSwitch />
      </NavbarContent> */}
    </NextUINavbar>
  );
};
