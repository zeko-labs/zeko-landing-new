"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";

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
      className="bg-transparent backdrop-blur-sm p-5"
      maxWidth="2xl"
      position="sticky"
      height={80}
    >
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
                  <Link
                    isExternal
                    href="/faucet"
                    className="text-black w-full"
                    aria-label="faucet"
                  >
                    Zeko Faucet
                  </Link>
                </DropdownItem>
                <DropdownItem key="transfer">
                  <Link
                    isExternal
                    href="/send"
                    className="text-black w-full"
                    aria-label="transfer"
                  >
                    Zeko Send
                  </Link>
                </DropdownItem>
                <DropdownItem key="docs">
                  <Link
                    isExternal
                    href="https://docs.zeko.io"
                    className="text-black w-full"
                    aria-label="docs"
                  >
                    Zeko Docs
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button className="bg-slate-200 flex">
                  Community
                  <Image
                    src="/utils/down_btn.png"
                    alt="down"
                    width={10}
                    height={10}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Actions-2">
                <DropdownItem key="discord">
                  <Link
                    isExternal
                    href="https://discord.gg/vSDxqAchUY"
                    className="text-black w-full"
                    aria-label="discord"
                  >
                    Discord
                  </Link>
                </DropdownItem>
                <DropdownItem key="telegram">
                  <Link
                    isExternal
                    href="https://t.me/+m8LBsR2kNTAxNmFh"
                    className="text-black w-full"
                    aria-label="telegram"
                  >
                    Telegram
                  </Link>
                </DropdownItem>
                <DropdownItem key="twitter">
                  <Link
                    isExternal
                    href="https://twitter.com/ZekoLabs"
                    className="text-black w-full"
                    aria-label="twitter"
                  >
                    X (Twitter)
                  </Link>
                </DropdownItem>
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
