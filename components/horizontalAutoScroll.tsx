import { ReactElement } from "react";
import { buttonCollor } from "../utils/enums";

interface HorizontalAutoScroll {
  color: buttonCollor;
  children: ReactElement | ReactElement[];
  delay?: boolean;
}
export default function HorizontalAutoScroll({
  color,
  children,
  delay,
}: HorizontalAutoScroll) {
  return (
    <div
      className={`flex items-center w-full h-[97.9px] overflow-x-hidden text-white ${
        color === buttonCollor.green
          ? "bg-gradient-to-r from-leemon-yellow to-leemon-green"
          : "bg-leemon-purple"
      }`}
    >
      <div
        className={`flex items-center ${
          delay ? "animate-marquee-slow" : "animate-marquee"
        }  whitespace-nowrap`}
      >
        {children}
      </div>
    </div>
  );
}
