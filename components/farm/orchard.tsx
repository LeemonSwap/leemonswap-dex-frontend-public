import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonColor from "../buttonColor";
import { buttonCollor } from "../../utils/enums";
import { useState } from "react";

interface Orchard {
  index: number;
  data: {
    apr: number;
    liquidity: number;
    stake: number;
    rewards: number;
    hasLiquidity: boolean;
  };
  isDark: boolean;
}
export default function Orchard({ index, data, isDark }: Orchard) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: -50,
        translateY: -100,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: index * 0.1 }}
      className="
        flex flex-col items-center w-full min-h-[70px] rounded-[10px] 
        bg-white dark:bg-leemon-purple-dark3
        font-book20 text-leemon-purple-dark2 dark:text-white
        px-1
      "
    >
      <div className="flex items-center w-full h-[70px] pl-[17px] ">
        <div className="flex items-center">
          <Image
            src="/hbar-icon.svg"
            width={28}
            height={28}
            alt="hbar"
            className="z-10"
          />
          <Image
            src="/usdc-icon.svg"
            width={28}
            height={28}
            alt="hbar"
            className="ml-[-4px] z-0"
          />
        </div>
        <span className="text-[16px] ml-[9px] dark:text-white">HBAR-USDC</span>
        <div className="flex flex-col gap-[6px] ml-[148px]">
          <span className="text-leemon-purple dark:text-[#635773] text-[10px]">
            APR
          </span>
          <span
            className={`${
              data.apr >= 100 ? "text-leemon-green" : "text-leemon-red"
            }  font-semibold20 text-[20px] w-[67px]`}
          >
            {data.apr}%
          </span>
        </div>

        <div className="flex flex-col gap-[6px] ml-[76px]">
          <span className="text-leemon-purple dark:text-[#635773] text-[10px]">
            LIQUIDITY
          </span>
          <span className="text-leemon-purple-dark2 dark:text-white text-[16px]">
            $
            {data.liquidity.toLocaleString("en-us", {
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        <div className="flex flex-col gap-[6px] ml-[76px]">
          <span className="text-leemon-purple dark:text-[#635773] text-[10px]">
            YOUR STAKE
          </span>
          <span className="text-leemon-purple-dark2 dark:text-white text-[16px]">
            $
            {data.stake.toLocaleString("en-us", {
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        <div className="flex flex-col gap-[6px] ml-[76px] mr-[56px]">
          <span className="text-leemon-purple dark:text-[#635773] text-[10px]">
            REWARDS
          </span>
          <span
            className={`${
              data.apr >= 100 && "text-leemon-green"
            } font-semibold20 text-[20px]`}
          >
            $
            {data.rewards.toLocaleString("en-us", {
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        <ButtonColor
          color={isDark ? buttonCollor.darkPurple : buttonCollor.white}
          action={() => {}}
          mini
        >
          Claim All
        </ButtonColor>

        <button onClick={() => setOpen(!open)}>
          <Image
            src={
              open
                ? isDark
                  ? "/farm-circle-arrow-up-dark.svg"
                  : "/farm-circle-arrow-up.svg"
                : isDark
                ? "/farm-circle-arrow-down-dark.svg"
                : "/farm-circle-arrow-down.svg"
            }
            width={20}
            height={20}
            alt="open orchard"
            className="ml-[27px]"
          />
        </button>
      </div>

      {/* NO LIQUIDITY */}
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
          paddingTop: 0,
          marginBottom: 0,
        }}
        animate={{
          opacity: open && !data.hasLiquidity ? 1 : 0,
          height: open && !data.hasLiquidity ? 219 : 0,
          paddingTop: open && !data.hasLiquidity ? 43 : 0,
          marginBottom: open && !data.hasLiquidity ? 3 : 0,
        }}
        transition={{ duration: 0.5 }}
        className={`
          flex w-full bg-[#E4FAB2] dark:bg-[#11002D] rounded-[10px] px-[43px] gap-[75px]
        `}
      >
        <span className="max-w-[220px] font-bold20 text-[24px] text-leemon-purple dark:text-leemon-green leading-[24px] pt-2 mr-[29px]">
          YOU DON'T HAVE ANY LIQUIDITY IN THIS ORCHARD.
        </span>
        <div className="flex flex-col font-book20 text-leemon-purple-dark2 dark:text-white">
          <span className="max-w-[249.44px] text-[16px] leading-[22px]">
            Estimated earnings for every $250 in liquidity
          </span>
          <ul className="flex flex-col w-full text-[10px] pt-[18px] gap-[4px]">
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed">
              <span>DAILY</span>
              <span className="font-semibold20">$0.25</span>
            </li>
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed">
              <span>WEEKLY</span>
              <span className="font-semibold20">$1.75</span>
            </li>
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed">
              <span>MONTHLY</span>
              <span className="font-semibold20">$7.50</span>
            </li>
            <li className="flex justify-between items-center">
              <span>YEARLY</span>
              <span className="font-semibold20">$91.25</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col font-book20 text-leemon-purple-dark2 dark:text-white">
          <span className="max-w-[229.44px] text-[16px] leading-[22px]">
            Estimated earnings for every $1,000 in liquidity
          </span>
          <ul className="flex flex-col w-full text-[10px] pt-[18px] gap-[4px]">
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed">
              <span>DAILY</span>
              <span className="font-semibold20">$1.25</span>
            </li>
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed">
              <span>WEEKLY</span>
              <span className="font-semibold20">$7.00</span>
            </li>
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed">
              <span>MONTHLY</span>
              <span className="font-semibold20">$30.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>YEARLY</span>
              <span className="font-semibold20">$365.00</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ButtonColor
            color={isDark ? buttonCollor.green : buttonCollor.green}
            mini
          >
            Stake
          </ButtonColor>

          <Link
            href="#"
            className="font-semibold20 text-[10px] text-leemon-purple dark:text-white underline mt-4 ml-3"
          >
            VIEW PAIR
          </Link>
          <Link
            href="#"
            className="font-semibold20 text-[10px] text-leemon-purple dark:text-white underline ml-3"
          >
            Add Liquidity
          </Link>
        </div>
      </motion.div>

      {/* HAS LIQUIDITY */}
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
          paddingTop: 0,
          marginBottom: 0,
        }}
        animate={{
          opacity: open && data.hasLiquidity ? 1 : 0,
          height: open && data.hasLiquidity ? 219 : 0,
          paddingTop: open && data.hasLiquidity ? 43 : 0,
          marginBottom: open && data.hasLiquidity ? 3 : 0,
        }}
        transition={{ duration: 0.5 }}
        className={`
          flex w-full bg-[#E4FAB2] dark:bg-[#11002D] rounded-[10px] px-[43px] gap-[54px]
        `}
      >
        <div className="flex flex-col bg-white dark:bg-leemon-purple-dark rounded-[10px] px-[10px] pb-[9px] pt-[21px] w-[343px] h-[184px]  font-book20 text-[10px] text-leemon-purple mt-[-24px] ml-[-24px]">
          <span className="text-[16px] text-leemon-purple-dark2 dark:text-white">
            Balance:
          </span>
          <div className="flex justify-between items-center mt-[4px]">
            <span className="font-bold20 text-[36px] text-leemon-green">
              $12,555.49
            </span>
            <span className="text-leemon-purple-dark2 dark:text-white">
              148.66878
              <br />
              HBAR-USDC LP
            </span>
          </div>
          <div className="flex items-center mt-[6px] gap-[7px]">
            <div className="flex flex-col bg-[#E4FAB2] dark:bg-[#11002D] rounded-[10px] pt-[14px] pb-[6px] pl-[12px] w-[159px] dark:text-white">
              <span className="text-[20px]">144,478</span>
              <span>HBAR</span>
            </div>
            <div className="flex flex-col bg-[#E4FAB2] dark:bg-[#11002D] rounded-[10px] pt-[14px] pb-[6px] pl-[12px] w-[159px] dark:text-white">
              <span className="text-[20px]">6,277.75</span>
              <span>USDC</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-book20 text-leemon-purple-dark2 dark:text-white">
          <span className="max-w-[229.44px] text-[16px] leading-[22px] mb-[10px]">
            Your orchard share:
          </span>
          <span className="font-semibold20 text-[20px]">0.52%</span>
          <Link
            href="#"
            className="font-semibold20 text-[10px] text-leemon-purple dark:text-white underline mt-3"
          >
            VIEW PAIR
          </Link>
          <Link
            href="#"
            className="font-semibold20 text-[10px] text-leemon-purple dark:text-white underline"
          >
            Add Liquidity
          </Link>
        </div>

        <div className="flex flex-col font-book20 text-leemon-purple-dark2 dark:text-white">
          <span className="max-w-[229.44px] text-[16px] leading-[22px]">
            Estimated earnings
          </span>
          <ul className="flex flex-col w-full text-[10px] pt-[18px] gap-[4px]">
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed pb-[4px]">
              <span>DAILY</span>
              <span className="font-semibold20">$10.00</span>
            </li>
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed pb-[4px]">
              <span>WEEKLY</span>
              <span className="font-semibold20">$70.00</span>
            </li>
            <li className="flex justify-between items-center border-b-[1px] border-leemon-purple-dark2 border-dashed pb-[4px]">
              <span>MONTHLY</span>
              <span className="font-semibold20">$300.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>YEARLY</span>
              <span className="font-semibold20">$3650.00</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col font-book20 text-leemon-purple-dark2 dark:text-white text-[10px]">
          <span className="max-w-[229.44px] text-[16px] mb-[15px]">
            Rewards
          </span>
          <span className="dark:text-[#635773]">HBAR</span>
          <div className="flex items-center gap-[15px]">
            <span className="font-semibold20 text-[12px]">$200.10</span>
            <Link
              href="#"
              className="font-semibold20 text-[9px] text-leemon-purple dark:text-[#635773] underline"
            >
              CLAIM
            </Link>
          </div>

          <span className="mt-[16px] dark:text-[#635773]">HBAR</span>
          <div className="flex items-center gap-[15px]">
            <span className="font-semibold20 text-[12px]">$300.10</span>
            <Link
              href="#"
              className="font-semibold20 text-[9px] text-leemon-purple dark:text-[#635773] underline"
            >
              CLAIM
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <ButtonColor color={buttonCollor.green} mini>
            Stake
          </ButtonColor>
          <ButtonColor color={buttonCollor.green} mini>
            Unstake
          </ButtonColor>
        </div>
      </motion.div>
    </motion.div>
  );
}
