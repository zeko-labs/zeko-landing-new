"use client";

import {
  TwitterIcon,
  TelegramIcon,
  PaperIcon,
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";
import { useState, useCallback, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

export const Footer = (props: any) => {
  const { isOnLandingPage } = props;
  const [isContentOver, setIsContentOver] = useState(false);
  const checkContentOver = useCallback(() => {
    setIsContentOver(
      document.documentElement.scrollHeight >
        document.documentElement.clientHeight &&
        window.scrollY + window.innerHeight <
          document.documentElement.scrollHeight
    );
  }, []);

  useEffect(() => {
    checkContentOver();
    window.addEventListener("resize", checkContentOver, { passive: true });
    window.addEventListener("scroll", checkContentOver, { passive: true });
    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("scroll", () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer
      className={`w-full flex items-center justify-center ${
        isOnLandingPage ? "md:justify-end" : ""
      } gap-4 md:gap-8 p-2 md:p-4 bg-transparent backdrop-blur-sm`}
    >
      <Link isExternal href={siteConfig.links.discord} aria-label="MVP">
        <DiscordIcon className="text-default-900" size={28} />
      </Link>
      <Link isExternal href={siteConfig.links.docs} aria-label="Docs">
        <GithubIcon className="text-default-900" size={28} />
      </Link>
      <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
        <TwitterIcon className="text-default-900" size={28} />
      </Link>
      <Link isExternal href={siteConfig.links.telegram} aria-label="Telegram">
        <TelegramIcon className="text-default-900" size={28} />
      </Link>
    </footer>
  );
};
