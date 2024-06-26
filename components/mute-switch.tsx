"use client";

import { FC, useEffect, useState } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import clsx from "clsx";

import { UnMuteIcon, MuteIcon } from "@/components/icons";

const audio = new Audio("/background.mp3");

export interface MuteSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

const MuteSwitch: FC<MuteSwitchProps> = ({ className, classNames }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    const handleEnded = () => {
      audio.currentTime = 0; // Reset time to start
      audio.play(); // Play again
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, [isPlaying]);

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: !isPlaying,
    onChange: toggle,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {isSelected ? <MuteIcon /> : <UnMuteIcon />}
      </div>
    </Component>
  );
};

export default MuteSwitch;
