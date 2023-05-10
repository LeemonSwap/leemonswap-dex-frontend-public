import Image from "next/image";
import { ReactElement, useContext, useEffect, useState } from "react";
import { StateContext } from "../context/stateContext";
import { tooltipDirection } from "../utils/enums";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

interface Tooltip {
  children: ReactElement | string;
  direction?: tooltipDirection;
}
export default function Tooltip({
  children,
  direction = tooltipDirection.bottom,
}: Tooltip) {
  const { isDark } = useContext(StateContext);
  const [display, setDisplay] = useState(false);
  const [applyEffect, setApplyEffect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setApplyEffect(display);
    }, 200);
  }, [display]);

  return (
    <Tippy content={children}>
      <a className="w-[11px] h-[11px] mb-[1px] relative">
        <Image
          src={isDark ? "/tooltip-dark.svg" : "/tooltip.svg"}
          fill
          alt="tooltip"
        />

        {/* <div
        className={`transition ease-in-out delay-150 bottom-full
          ${display ? "absolute" : "hidden"}
          ${applyEffect ? "opacity-100" : "opacity-0"}
          {/* ${
            direction === tooltipDirection.bottom ? "top-[-70px]" : "top-[30px]"
          } left-[-11px] min-w-[232px] min-h-[21px]`}
      >
        <div className="relative w-full h-full">
          {direction === tooltipDirection.bottom ? (
            <div className="text-white rounded-[10px] right-0 bottom-full  py-[15px] px-[14px] bg-leemon-purple-mid2 dark:bg-leemon-purple-dark3 font-book20 text-[9px] text-left drop-shadow-tooltip border-[1px] border-leemon-green">
              {children}
              <svg
                className="absolute text-leemon-purple-mid2 dark:text-leemon-purple-dark3 h-2 left-0 ml-3 top-full "
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                xmlSpace="preserve"
              >
                <polygon className="fill-current" points="0,0 100,137 200,0" />
              </svg>
            </div>
          ) : (
            <div className="text-white rounded-[10px] right-0 top-full py-[15px] px-[14px] bg-leemon-purple-mid2 dark:bg-leemon-purple-dark3 font-book20 text-[9px] text-left drop-shadow-tooltip border-[1px] border-leemon-green">
              <svg
                className="absolute text-leemon-purple-mid2 dark:text-leemon-purple-dark3 h-2 left-0 ml-3 bottom-full rotate-180"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                xmlSpace="preserve"
              >
                <polygon className="fill-current" points="0,0 100,137 200,0" />
              </svg>
              {children}
            </div>
          )}
        </div>
      </div> */}
      </a>
    </Tippy>
  );
}
