import { useCallback, useContext, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { StateContext } from "../context/stateContext";
import Tooltip from "./tooltip";
import { tooltipDirection } from "../utils/enums";

export default function Settings() {
  enum slippages {
    one = "0.1",
    two = "0.5",
    three = "1",
  }

  const { isDark, showSettings, setShowSettings } = useContext(StateContext);
  const [applyEffect, setApplyEffect] = useState(false);
  const [slippage, setSlippage] = useState(slippages.one.valueOf());


  // const onConfirm = useCallback(() => {
  //   clickAction();
  // }, [clickAction]);

  useEffect(() => {
    if (showSettings) {
      document.documentElement.style.overflow = "hidden";
      setApplyEffect(true);
      return;
    }

    document.documentElement.style.overflow = "";
    setApplyEffect(false);
  }, [showSettings]);

  return (
    <div
      className={`
        top-0 left-0 right-0 bottom-0 w-full h-full
        z-[900] overflow-hidden bg-leemon-purple-dark4 bg-opacity-[0.79] flex flex-col items-center pt-[180px] lg:pt-[400px] backdrop-blur-[2px]
        ${showSettings ? "fixed" : "hidden"}
      `}
    >
      <div
        className={`
          flex flex-col w-[360px] sm:w-[410px] justify-center
          transition ease-linear delay-100 duration-150 scale-100
          ${isDark ? "sm:drop-shadow-shape-dark" : "sm:drop-shadow-shape"}
          ${applyEffect ? "scale-100" : "scale-0"}
        `}
      >
        <header
          className="
            flex items-center justify-between
            h-[74px] rounded-t-[20px] bg-leemon-green-light3 dark:bg-leemon-purple-mid2
            border-[2px] border-leemon-purple-dark2 font-semibold20 
            text-[16px] text-leemon-purple-mid2 dark:text-white
          "
        >
          <span className="pl-[30px]">Settings</span>
          <button className="pr-[23px]" onClick={() => setShowSettings(false)}>
            <Image
              src={isDark ? "/close-tokens-dark.svg" : "/close-tokens.svg"}
              width={20}
              height={20}
              alt="close"
            />
          </button>
        </header>
        <main
          className="
            flex flex-col h-[133px] justify-center
            bg-leemon-gray-light2 dark:bg-leemon-purple-dark3
            rounded-b-[20px] border-[2px] border-t-0 
            border-leemon-purple-dark2 px-[19px]
          "
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold20 text-[12px] text-leemon-purple-dark2 dark:text-white">
              Slippage Tolerance
            </span>
            <Tooltip direction={tooltipDirection.bottom}>
              Anything about slippage tolerance
            </Tooltip>
          </div>
          <div className="flex items-center justify-between w-full pt-[21px] font-book20">
            {/* SEARCH */}

            <button
              onClick={() => setSlippage(slippages.one.valueOf())}
              className={`
                flex items-center justify-center
                min-w-[65px] sm:w-[75px] max-h-[40px] text-center
                bg-white dark:bg-leemon-purple-dark2
                hover:outline hover:outline-leemon-purple-dark2 hover:dark:outline-leemon-green
                text-leemon-purple-dark2 dark:text-white text-[16px]
                rounded-[10px] py-[21px] pb-[20px]
                ${
                  slippage === slippages.one.valueOf() &&
                  "outline outline-leemon-purple-dark2 dark:outline-leemon-green"
                }
              `}
            >
              0.1%
            </button>

            <button
              onClick={() => setSlippage(slippages.two.valueOf())}
              className={`
                flex items-center justify-center
                min-w-[65px] sm:w-[75px] max-h-[40px] text-center
                bg-white dark:bg-leemon-purple-dark2
                hover:outline hover:outline-leemon-purple-dark2 hover:dark:outline-leemon-green
                text-leemon-purple-dark2 dark:text-white text-[16px]
                rounded-[10px] py-[21px] pb-[20px]
                ${
                  slippage === slippages.two.valueOf() &&
                  "outline outline-leemon-purple-dark2 dark:outline-leemon-green"
                }
              `}
            >
              0.5%
            </button>

            <button
              onClick={() => setSlippage(slippages.three.valueOf())}
              className={`
                flex items-center justify-center
                min-w-[65px] sm:w-[75px] max-h-[40px] text-center
                bg-white dark:bg-leemon-purple-dark2
                hover:outline hover:outline-leemon-purple-dark2 hover:dark:outline-leemon-green
                text-leemon-purple-dark2 dark:text-white text-[16px]
                rounded-[10px] py-[21px] pb-[20px]
                ${
                  slippage === slippages.three.valueOf() &&
                  "outline outline-leemon-purple-dark2 dark:outline-leemon-green"
                }
              `}
            >
              1%
            </button>

            <input
              type="text"
              value={slippage}
              onChange={(e) => setSlippage(e.target.value)}
              // onChange={() => {}}
              placeholder="0.1"
              className="flex justify-center text-center items-center mt-[-2px] outline-none
              border-[1px] border-leemon-purple-dark2 dark:border-leemon-purple-dark2
              placeholder-leemon-purple-dark2/40
              w-[85px] sm:w-[100px] min-h-[42px] rounded-[10px]
              drop-shadow-shape-small-light dark:drop-shadow-shape-small
              bg-leemon-green-light3 dark:dark:bg-leemon-green
              text-leemon-purple-dark2"
              // className="
              //   w-[65px] sm:w-[100px] h-[40px] text-center outline-none
              //   bg-leemon-gray-light/70 shadow-[inset_1px_1px_2.5px_#401484]
              //    focus:h-[38px]
              //   placeholder-leemon-purple-dark2 dark:placeholder-white
              //   text-leemon-purple-dark2
              //   rounded-[10px] py-[21px] pb-[20px]
              // "
            />
            <label className="text-[16px]text-leemon-purple-dark2 dark:text-leemon-green-light3">
              %
            </label>
          </div>
        </main>
      </div>
    </div>
  );
}
