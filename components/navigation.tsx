import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { StateContext } from "../context/stateContext";
import ButtonConnect from "./buttonConnect";
import ButtonMenu from "./buttonMenu";
import Balance from "./balance";
import ThemeSwitcher from "./themeSwitcher";
import ButtonColor from "./buttonColor";
import { buttonCollor } from "../utils/enums";

export default function Navigation() {
  const [itemMenuOpen, setItemMenuOpen] = useState(0);
  const { isDark, setShowSettings } = useContext(StateContext);

  return (
    <nav
      className="
        fixed top-0 left-0 bg-white dark:bg-leemon-purple-dark3 
        w-full z-30
      "
    >
      <div className="container min-w-full px-4 xl:px-12 flex justify-between items-center h-[67.7px] relative">
        <Link href="/">
          <div className="relative w-[275.47px] h-[46.62px]">
            <Image
              src={isDark ? "/logo-dark.svg" : "/logo.svg"}
              fill
              alt="balance"
            />
          </div>
        </Link>

        {/*------------------ DESKTOP MENU -----------------*/}
        <div className="hidden xl:flex items-center w-full">
          <div
            onMouseLeave={() => setItemMenuOpen(0)}
            className="flex pl-[60px] w-full items-center h-[67.7px] 2xl:gap-3"
          >
            <ButtonMenu
              title="Swap"
              url="/swap"
              open={itemMenuOpen === 1}
              onHover={() => setItemMenuOpen(1)}
            />
            <ButtonMenu
              title="Liquidity"
              url="#"
              open={itemMenuOpen === 2}
              onHover={() => setItemMenuOpen(2)}
            />
            <ButtonMenu
              title="Stake"
              url="#"
              open={itemMenuOpen === 3}
              onHover={() => setItemMenuOpen(3)}
            />
            <ButtonMenu
              title="Farm"
              url="/farm"
              open={itemMenuOpen === 4}
              onHover={() => setItemMenuOpen(4)}
            />
            <ButtonMenu
              title="More"
              options={[
                { title: "Referral", url: "#" },
                { title: "Info", url: "#" },
                { title: "Voting", url: "#" },
                { title: "NFTs", url: "#" },
                { title: "Bridge", url: "#" },
                { title: "Audits", url: "#" },
                { title: "Docs", url: "#" },
              ]}
              open={itemMenuOpen === 5}
              onHover={() => setItemMenuOpen(5)}
            />
          </div>
          <div className="hidden lg:flex flex-row justify-end items-center w-full gap-[23px] xl:gap-[37px] ">
            <Balance />
            <ThemeSwitcher />
            <div className="mt-[-6px]">
              <ButtonConnect />
            </div>
          </div>
        </div>

        {/*------------------ MOBILE MENU ------------------*/}
        <input
          type="checkbox"
          className="
            block xl:hidden
            peer 
            absolute top-0 inset-x-0 
            w-full h-12 
            opacity-0 z-10 cursor-pointer
          "
        />
        {/* HAMBURGER */}
        <svg
          className="
            block xl:hidden
            w-8 h-8 
            transition-transform duration-500
            rotate-0 peer-checked:rotate-90
          "
          fill="none"
          stroke="#633BB3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        {/* NAVIGATION */}
        <div
          className="
              absolute xl:hidden top-[67px] -right-full h-screen w-8/12 
              bg-leemon-purple-dark3 
              opacity-0 px-4
              transition-all duration-300
              peer-checked:right-0 peer-checked:opacity-100
              backdrop-blur-[16px]
              font-book20 text-[14px]
            "
        >
          <ul className="flex flex-col w-full pt-8">
            <li className="my-px">
              <span className="flex font-semibold20 text-[16px] text-leemon-purple2 px-4 my-4">
                Products
              </span>
            </li>
            <li className="my-px">
              <Link
                href="/swap"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-leemon-purple-dark5 hover:text-white"
              >
                <span className="flex items-center justify-center">
                  <Image
                    src="/swap-menu.svg"
                    width={24}
                    height={24}
                    alt="swap"
                  />
                </span>
                <span className="ml-3">Swap</span>
              </Link>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-leemon-purple-dark5 hover:text-white"
              >
                <span className="flex items-center justify-center">
                  <Image
                    src="/liquidity.svg"
                    width={24}
                    height={24}
                    alt="liquidity"
                  />
                </span>
                <span className="ml-3">Liquidity</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-leemon-purple-dark5 hover:text-white"
              >
                <span className="flex items-center justify-center">
                  <Image src="/stake.svg" width={24} height={24} alt="stake" />
                </span>
                <span className="ml-3">Stake</span>
                <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                  1k
                </span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="/farm"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-leemon-purple-dark5 hover:text-white"
              >
                <span className="flex items-center justify-center">
                  <Image src="/stake.svg" width={24} height={24} alt="stake" />
                </span>
                <span className="ml-3">Farm</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-leemon-purple-dark5 hover:text-white"
              >
                <span className="flex items-center justify-center text-lg text-green-400">
                  <Image src="/more.svg" width={24} height={24} alt="swap" />
                </span>
                <span className="ml-3">More</span>
              </a>
            </li>
            <li className="my-px">
              <span className="flex font-semibold20 text-[16px] text-leemon-purple2 px-4 my-4">
                Account
              </span>
            </li>
            <li className="my-px">
              <button
                onClick={() => setShowSettings(true)}
                className="flex flex-row items-center w-full h-12 px-4 rounded-lg text-white hover:bg-leemon-purple-dark5 hover:text-white"
              >
                <span className="flex items-center justify-center">
                  <Image
                    src="/settings.svg"
                    width={24}
                    height={24}
                    alt="swap"
                  />
                </span>
                <span className="ml-3">Settings</span>
              </button>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-leemon-purple-dark5 hover:text-white"
              >
                <span className="flex items-center justify-center">
                  <Image src="/theme.svg" width={24} height={24} alt="swap" />
                </span>
                <span className="ml-3">Theme</span>
                <div className="ml-auto">
                  <ThemeSwitcher />
                </div>
              </a>
            </li>
            <li className="mt-[90px]">
              <ButtonConnect />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
