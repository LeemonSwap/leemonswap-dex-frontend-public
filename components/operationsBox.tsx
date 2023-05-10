import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import TokenInput from "../components/tokenInput";
import ButtonColor from "./buttonColor";
import Tooltip from "./tooltip";
import { StateContext } from "../context/stateContext";
import { buttonCollor } from "../utils/enums";
import { Token } from "../utils/types";
import Accordion from "./accordion";
import { motion } from "framer-motion";

interface OperationsBox {
  from: Token;
  to: Token;
  expertMode?: boolean;
  setExpertMode?: any;
}

export default function OperationsBox({
  from,
  to,
  expertMode,
  setExpertMode,
}: OperationsBox) {
  const { isDark, setShowSettings } = useContext(StateContext);
  const [displayDetails, setDisplayDetails] = useState(false);
  const [invertedPair, setInvertedPair] = useState(false);
  const [applyEffect, setApplyEffect] = useState(false);

  useEffect(() => {
    setApplyEffect(!applyEffect);
  }, [invertedPair]);

  return (
    <div className={`flex flex-col relative`}>
      {/* MOBILE BACKGROUND LEEMON IMAGE */}
      <Image
        src="/bg-box-mobile.svg"
        width={399}
        height={207}
        alt="bg mobile"
        className="
            absolute sm:hidden z-10 
            top-[-103px] left-[0px]
            min-w-[349px] min-h-[157px]
          "
      />

      {/* BACKGROUND LEEMON IMAGE */}
      <Image
        src={isDark ? "/bg-box-leemon-dark.svg" : "/bg-box-leemon.svg"}
        width={615}
        height={624}
        alt="cloud"
        className="
            absolute z-10 
            hidden sm:block
            sm:top-[-151px] sm:left-[-174px] 
            sm:min-w-[615px] sm:min-h-[624px]
          "
      />

      {/* CONTENT */}
      <div className="flex flex-col w-full sm:w-[376px] bg-leemon-gray-light2 dark:bg-leemon-purple-dark2 rounded-[20px] z-20 relative">
        <header className="flex justify-between items-center w-full bg-leemon-purple-mid2 rounded-t-[20px] px-[20px] pt-[21px] pb-[17px]">
          <div className="flex flex-col w-full h-full">
            <span className="font-semibold20 text-[16px] text-white mb-[3px]">
              Swap
            </span>
            <span className="font-book20 text-[10px] text-leemon-green-light3">
              Swap tokens easily
            </span>
          </div>
          <div className="flex items-center gap-[2px]">
            <button
              onClick={() => setShowSettings(true)}
              className="
                transition-all duration-500 p-2 hover:bg-leemon-purple-dark2 
                rounded-full
              "
            >
              <Image
                src="/gear.svg"
                width={21}
                height={21}
                alt="gear"
                className="min-w-[21px] min-h-[21px]"
              />
            </button>
            <button
              onClick={setExpertMode}
              className="
                transition-all duration-500
                p-2 hover:bg-leemon-purple-dark2 rounded-md
              "
            >
              <Image
                src={expertMode ? "/chart-off.svg" : "/chart.svg"}
                width={26}
                height={19}
                alt="chart"
                className="min-w-[26px] min-h-[19px]"
              />
            </button>
          </div>
        </header>
        <main className="flex flex-col w-full h-full p-[20px] gap-[11px]">
          <label className="font-semibold20 text-[12px] text-leemon-purple-dark2 dark:text-white">
            From
          </label>
          <TokenInput token={from} />
          {/* SWAP TOKENS */}
          <div className="flex justify-center items-center w-full mt-[6px] mb-[-24px]">
            <button className="relative w-[30px] h-[30px]">
              <Image
                src={isDark ? "/arrows-dark.svg" : "/arrows.svg"}
                fill
                alt="swap"
              />
            </button>
          </div>
          <label className="font-semibold20 text-[12px] text-leemon-purple-dark2 dark:text-white">
            To (estimated)
          </label>
          <TokenInput token={to} />
          <div className="flex justify-between items-center font-book20 text-[9px] text-leemon-purple-dark2 dark:text-white pt-[8px] mb-[-7px] pl-[5px] pr-[12px]">
            <span>Slippage Tollerance</span>
            <span>0.5%</span>
          </div>
          {/* <div className="flex justify-between items-center font-book20 text-[9px] text-leemon-purple-dark2 dark:text-white  pl-[5px] pr-[12px]">
            <div className="flex items-center gap-1">
              <span>Price</span>
              <Tooltip>
                The difference between the market price and estimated price due
                to trade size.
              </Tooltip>
            </div>
            <div className="flex items-center gap-2">
              <span>1 SAUCE ~ 0.734534 HBAR</span>
              <Image
                className="mb-1"
                src={isDark ? "/double-arrows-dark.svg" : "/double-arrows.svg"}
                width={8.47}
                height={11.55}
                alt="arrows"
              />
              <button onClick={() => setDisplayDetails(!displayDetails)}>
                <Image
                  className="mb-1"
                  src={
                    displayDetails
                      ? isDark
                        ? "/circle-arrow-up-dark.svg"
                        : "/circle-arrow-up.svg"
                      : isDark
                      ? "/circle-arrow-down-dark.svg"
                      : "/circle-arrow-down.svg"
                  }
                  width={16}
                  height={16}
                  alt="arrows"
                />
              </button>
            </div>
          </div> */}

          <Accordion
            iconHref={
              isDark ? "/circle-arrow-down-dark.svg" : "/circle-arrow-down.svg"
            }
            iconWidth={16}
            iconHeight={16}
            iconPositionClass="top-[10px] right-[10px]"
            headerChildren={
              <div className="flex justify-between items-center font-book20 text-[9px] text-leemon-purple-dark2 dark:text-white  pl-[5px] pr-[35px] h-10">
                <div className="flex items-center gap-1">
                  <span>Price</span>
                  <Tooltip>
                    The difference between the market price and estimated price
                    due to trade size.
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    {invertedPair
                      ? "1 USDC ~ 0.734534 HBAR"
                      : "1 HBAR ~ 1.265466 USDC"}
                  </span>
                  <motion.button
                    onClick={() => setInvertedPair(!invertedPair)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, rotate: [0, 45] }}
                  >
                    <Image
                      className="mb-1"
                      src={
                        isDark
                          ? "/double-arrows-dark.svg"
                          : "/double-arrows.svg"
                      }
                      width={8.47}
                      height={11.55}
                      alt="arrows"
                    />
                  </motion.button>
                </div>
              </div>
            }
            changeAction={() => setDisplayDetails(!displayDetails)}
          >
            <div
              className={`
              flex flex-col w-full
            `}
            >
              <div className="flex flex-col w-full gap-[10px]">
                <div className="flex justify-between font-book20 text-[9px] text-leemon-purple-dark2 dark:text-white pl-[5px] pr-[12px]">
                  <div className="flex items-center gap-1">
                    <span>Min. Receive</span>
                    <Tooltip>
                      The difference between the market price and estimated
                      price due to trade size.
                    </Tooltip>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-right leading-tight">
                      8.68 HBAR
                      <br />
                      ($0.42)
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center font-book20 text-[9px] text-leemon-purple-dark2 dark:text-leemon-gray-light pl-[5px] pr-[12px]">
                  <div className="flex items-center gap-1">
                    <span>Price Impact</span>
                    <Tooltip>
                      The difference between the market price and estimated
                      price due to trade size.
                    </Tooltip>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>1.93%</span>
                  </div>
                </div>
                {/* SEPARATOR */}
                <div className="w-full h-[1px] bg-leemon-gray-light" />
                {/* ROUTE */}
                <div className="flex justify-between items-center font-book20 text-[9px] text-leemon-purple-dark2 dark:text-leemon-gray-light pl-[5px] pr-[12px]">
                  <div className="flex items-center gap-1">
                    <span>Route</span>
                    <Tooltip>
                      The difference between the market price and estimated
                      price due to trade size.
                    </Tooltip>
                  </div>
                </div>
                <div className="flex items-center gap-[10px] pl-[5px] pt-1">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/hbar-icon.svg"
                      width={28}
                      height={28}
                      alt="route 1"
                    />
                    <span className="font-semibold20 text-[12px] text-leemon-purple-dark2 dark:text-white mt-[2px]">
                      HBAR
                    </span>
                  </div>
                  <Image
                    src="/route-arrow-right.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                  />

                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/hbar-icon.svg"
                      width={28}
                      height={28}
                      alt="route 1"
                    />
                    <span className="font-semibold20 text-[12px] text-leemon-purple-dark2 dark:text-white mt-[2px]">
                      HBARX
                    </span>
                  </div>
                  <Image
                    src="/route-arrow-right.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                  />

                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/usdc-icon.svg"
                      width={28}
                      height={28}
                      alt="route 1"
                    />
                    <span className="font-semibold20 text-[12px] text-leemon-purple-dark2 dark:text-white mt-[2px]">
                      USDC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>

          <div className="flex justify-center items-center mt-[30px] mb-[5px]">
            <ButtonColor color={buttonCollor.lightGreen} small>
              Swap
            </ButtonColor>
          </div>
        </main>
      </div>

      {/* SHADOW */}
      <div
        className={`
          hidden absolute top-5 left-5 sm:flex flex-col bg-leemon-purple-dark2 dark:bg-black 
          rounded-[20px] z-10 w-[96%] sm:w-[373px]
          transition-height ease-in-out  duration-[550ms] delay-75
          ${displayDetails ? "h-[712px]" : "h-[585px]"}
        `}
      >
        <div className="bg-leemon-purple-mid2 dark:bg-leemon-purple-dark3 flex w-full h-full mt-20 rounded-b-[20px]"></div>
      </div>
    </div>
  );
}
