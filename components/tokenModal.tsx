import { useCallback, useContext, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { StateContext } from "../context/stateContext";
import Tooltip from "./tooltip";
import { tooltipDirection } from "../utils/enums";

type Props = {
  title: string;
  isOpen: boolean;
  clickAction: any;
  closeAction: any;
};

export default function TokenModal({
  title,
  isOpen,
  clickAction,
  closeAction,
}: Props) {
  const { isDark } = useContext(StateContext);
  const [applyEffect, setApplyEffect] = useState(false);
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [tempStatus, setTempStatus] = useState(false);
  const onConfirm = useCallback(() => {
    clickAction();
  }, [clickAction]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      setApplyEffect(true);
      return;
    }

    document.documentElement.style.overflow = "";
    setApplyEffect(false);
  }, [isOpen]);

  return (
    <div
      className={`
        top-0 left-0 right-0 bottom-0 w-full h-full
        z-40 overflow-hidden bg-leemon-purple-dark4 bg-opacity-[0.79] flex flex-col items-center pt-[10px] sm:pt-[80px] backdrop-blur-[2px]
        ${isOpen ? "fixed" : "hidden"}
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
          <span className="pl-[30px]">{title}</span>
          <button className="pr-[23px]" onClick={closeAction}>
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
            flex flex-col h-[560px] sm:h-[674.77px] 
            bg-leemon-gray-light2 dark:bg-leemon-purple-dark3
            rounded-b-[20px] border-[2px] border-t-0 
            border-leemon-purple-dark2
          "
        >
          {/* TOP OPTIONS */}
          <section className="flex flex-col w-full pt-[21px] px-[19px] font-book20">
            {/* SEARCH */}
            <div className="flex items-center w-full h-[51px] relative">
              <input
                type="text"
                placeholder="Search symbol or contract address"
                className="
                w-full bg-whited dark:bg-leemon-purple-dark2 outline-none
                placeholder-leemon-purple-dark2 dark:placeholder-white
                text-leemon-purple-dark2 dark:text-white text-[12px]
                rounded-[10px] py-[21px] pb-[20px] px-[11px] pl-[39px]
              "
              />
              <Image
                src={
                  isDark
                    ? "/search-tokens-icon-dark.svg"
                    : "/search-tokens-icon.svg"
                }
                width={20}
                height={20}
                alt="search"
                className="absolute top-[14px] left-[11px]"
              />
            </div>
            {/* BOOKMARKS */}
            <div
              className="
                flex items-center w-full mt-[15px] justify-between 
                text-[16px]text-leemon-purple-dark2 dark:text-white 
                border-b-[1px] border-leemon-gray-light dark:border-leemon-gray-light-5/70 
                pb-[14px] gap-[6px]
              "
            >
              <button
                onClick={() => setOnlyBookmarks(!onlyBookmarks)}
                className="flex justify-center items-center p-[10px] bg-leemon-gray-light dark:bg-leemon-purple-dark2 rounded-[10px]"
              >
                <Image
                  src={
                    isDark
                      ? onlyBookmarks
                        ? "/star-white-fill.svg"
                        : "/star-white.svg"
                      : onlyBookmarks
                      ? "/star-purple-fill.svg"
                      : "/star-purple.svg"
                  }
                  width={20}
                  height={20}
                  alt="star"
                />
              </button>
              {[1, 2, 3].map((item, index) => (
                <button
                  key={index}
                  className="
                    flex justify-center items-center px-[13px] py-2 
                    w-[100px] h-[40px]
                    bg-leemon-gray-light dark:bg-leemon-purple-dark2 
                    rounded-[10px] gap-1
                    border-leemon-purple-dark2 dark:border-leemon-green
                    hover:border-[1px]
                  "
                >
                  <Image
                    src="/hbar-icon.svg"
                    width={21}
                    height={21}
                    alt="hbar"
                  />
                  <span>HBAR</span>
                </button>
              ))}

              <button>
                <Image
                  src={isDark ? "/arrow-down-green.svg" : "/arrow-down.svg"}
                  width={10}
                  height={10}
                  className="ml-[6px] min-w-[10px] mt-1"
                  alt="arrow down"
                />
              </button>
            </div>
          </section>
          {/* TOKENS LIST */}
          <section className="flex flex-col max-w-[403px] h-full pb-[33px] overflow-y-auto pr-1 pt-2 z-40">
            <div className="flex flex-col w-full h-full gap-[2px] overflow-y-auto">
              {[1, 2, 3, 4, 5, 7, 8, 9, 2, 3, 4, 5, 7, 8, 9].map(
                (item, index) => (
                  <button
                    key={index}
                    className="mx-[10px] p-[10px] mr-[15px] bg-transparent hover:bg-white hover:dark:bg-leemon-purple-dark2 rounded-[10px]"
                  >
                    <div className="flex justify-between items-center w-full h-[38.04px]">
                      <div className="flex items-center w-full h-full gap-2">
                        <Image
                          src="/hbar-icon.svg"
                          width={38.09}
                          height={38.04}
                          alt="token"
                        />

                        <div className="flex flex-col justify-center text-left leading-tight text-leemon-purple-dark2 dark:text-white relative">
                          <div className="flex items-center gap-[5px]">
                            <label className="font-semibold20 text-[16px]">
                              HBARX
                            </label>
                            <Tooltip
                              direction={
                                index === 0
                                  ? tooltipDirection.top
                                  : tooltipDirection.bottom
                              }
                            >
                              The difference between the market price and
                              estimated price due to trade size.
                            </Tooltip>
                          </div>
                          <legend className="font-book20 text-[10px]">
                            HBAR
                          </legend>
                        </div>
                      </div>
                      <a onClick={() => setTempStatus(!tempStatus)}>
                        <Image
                          src={
                            tempStatus
                              ? "/star-purple-fill.svg"
                              : "/star-purple.svg"
                          }
                          width={20}
                          height={20}
                          alt="bookmark"
                        />
                      </a>
                    </div>
                  </button>
                )
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
