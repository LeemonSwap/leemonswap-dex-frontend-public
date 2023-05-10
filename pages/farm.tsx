import Image from "next/image";
import { useContext } from "react";
import BigSwitch from "../components/bigSwitch";
import ButtonColor from "../components/buttonColor";
import Container from "../components/container";
import Switch from "../components/switch";
import { StateContext } from "../context/stateContext";
import { buttonCollor } from "../utils/enums";
import { motion } from "framer-motion";
import Orchard from "../components/farm/orchard";
import MobileOrchard from "../components/farm/mobileOrchard";

export default function Farm() {
  const { isDark, setIsDark } = useContext(StateContext);
  const list = [
    {
      apr: 111,
      liquidity: 2345054.22,
      stake: 12555.49,
      rewards: 12555.49,
      hasLiquidity: false,
    },
    {
      apr: 111,
      liquidity: 2345054.22,
      stake: 12555.49,
      rewards: 12555.49,
      hasLiquidity: true,
    },
    {
      apr: 111,
      liquidity: 2345054.22,
      stake: 12555.49,
      rewards: 12555.49,
      hasLiquidity: false,
    },
    {
      apr: 111,
      liquidity: 2345054.22,
      stake: 12555.49,
      rewards: 12555.49,
      hasLiquidity: false,
    },
    {
      apr: 87,
      liquidity: 2345054.22,
      stake: 12555.49,
      rewards: 12555.49,
      hasLiquidity: false,
    },
    {
      apr: 87,
      liquidity: 2345054.22,
      stake: 12555.49,
      rewards: 12555.49,
      hasLiquidity: false,
    },
    {
      apr: 111,
      liquidity: 2345054.22,
      stake: 12555.49,
      rewards: 12555.49,
      hasLiquidity: false,
    },
  ];
  return (
    <div
      className={`
        flex flex-col w-full h-full
        bg-leemon-gray-light4 dark:bg-leemon-purple-dark4
        bg-farm-wave dark:bg-farm-wave-dark
        pt-[14.1px] pb-[61px] sm:pt-[64.1px] relative
        bg-no-repeat bg-left-top
      `}
    >
      <Container>
        {/* HEADER */}
        <div className="flex flex-col text-start relative pt-[35px] px-[15px] lg:p-0">
          <p
            className="
                  flex justify-center items-center w-[190px] h-[38px] rounded-full 
                  bg-gradient-to-r from-leemon-yellow  to-leemon-green2 font-book20 
                  text-[16px] text-leemon-purple-dark2 tracking-[0.12rem] pt-[2px]
                "
          >
            THE ORCHARD
          </p>
          <p className="font-bold20 text-[60px] lg:text-[73px] text-leemon-green leading-[60px] lg:leading-[80px] outlined mt-[21.19px] max-w-[700px]">
            FARM LIKE THERE'S NO TOMORROW
          </p>
          <p
            className="
                  font-book20 text-[16px] lg:text-[18px] text-leemon-purple-dark2 dark:text-white
                  max-w-auto mt-[22px] mb-[38.58px]
                  md:max-w-[430px]
                  xl:max-w-full 
                "
          >
            Grow your favorite fruits 24/7. The fertilizers are on us.
          </p>
          <div className="hidden lg:block absolute top-8 right-0 w-[514.45px] h-[258.03px]">
            <div className="relative min-w-[514.45px] min-h-[258.03px]">
              <Image
                src={isDark ? "/farm-top-art-dark.svg" : "/farm-top-art.svg"}
                fill
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 px-[15px] lg:p-0">
          <p
            className="
                  flex justify-center items-center w-[310px] h-[52px] rounded-full 
                  bg-gradient-to-t from-leemon-yellow  to-leemon-green2 dark:from-leemon-green-light3 dark:to-leemon-green-light3 font-book20 
                  text-[14px] text-leemon-purple-mid2 pt-[2px]
                "
          >
            YOUR TOTAL LIQUIDITY:{" "}
            <span className="font-bold20 ml-1">$123,423.47</span>
          </p>
          <p
            className="
                  flex justify-center items-center w-[310px] h-[52px] rounded-full 
                  bg-gradient-to-t from-leemon-yellow  to-leemon-green2 dark:from-leemon-green-light3 dark:to-leemon-green-light3 font-book20 
                  text-[14px] text-leemon-purple-mid2 pt-[2px]
                "
          >
            CLAIMABLE REWARDS:
            <span className="font-bold20 ml-1">$166.12</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-[38px] lg:mt-[78px] mb-[30px] items-center gap-[27px] w-full px-[15px] lg:p-0">
          {/* INPUT MOBILE */}
          <div className="flex lg:hidden w-full items-center relative">
            <input
              type="text"
              placeholder="Search Orchards"
              className="
                w-[455px] h-[51px] rounded-[10px] font-book20 text-[12px] 
                px-[37.42px] placeholder-leemon-purple-dark2 text-leemon-purple-dark2 
                dark:placeholder-white dark:text-white outline-none
                bg-white dark:bg-leemon-purple-dark
              "
            />

            <Image
              src={
                isDark ? "/farm-search-icon-dark.svg" : "/farm-search-icon.svg"
              }
              width={16}
              height={21}
              alt="search"
              className="absolute top-[16px] left-[18px]"
            />
          </div>

          <div className="flex gap-[27px] w-full">
            <Switch title="Staked Only" />
            <BigSwitch />
          </div>

          {/* INPUT DESKTOP */}
          <div className="hidden lg:flex w-full items-center justify-end relative">
            <input
              type="text"
              placeholder="Search Orchards"
              className="
                w-[455px] h-[51px] rounded-[10px] font-book20 text-[12px] 
                px-[37.42px] placeholder-leemon-purple-dark2 text-leemon-purple-dark2 
                dark:placeholder-white dark:text-white outline-none
                bg-white dark:bg-leemon-purple-dark
              "
            />

            <Image
              src={
                isDark ? "/farm-search-icon-dark.svg" : "/farm-search-icon.svg"
              }
              width={16}
              height={21}
              alt="search"
              className="absolute top-[16px] right-[424px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[6px] lg:gap-[4px]">
          {list.map((item, index) => (
            <div key={index}>
              <div className="hidden lg:block">
                <Orchard data={item} index={index} isDark={isDark} />
              </div>
              <div className="block lg:hidden">
                <MobileOrchard data={item} index={index} isDark={isDark} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
