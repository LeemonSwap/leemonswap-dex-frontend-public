import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { useContext } from "react";
import { StateContext } from "../../context/stateContext";
export default function Socials() {
  const { isDark } = useContext(StateContext);
  return (
    <div className="flex flex-col items-center bg-leemon-green-light dark:bg-leemon-purple-dark3 pt-[67.3px] pb-[69.72px] font-book20 text-[18px] text-leemon-purple-dark">
      <p className="flex md:hidden justify-center items-center py-4 px-8 rounded-full bg-leemon-yellow text-[14px] mx-4 text-center">
        It's all about community engagement and spreading the word. So, without
        further ado, get your $JUICE together and:
      </p>
      <p className="hidden md:flex justify-center items-center w-full py-2 md:w-auto md:h-[34.6px] px-7 md:rounded-full bg-leemon-yellow md:py-0 md:pt-[2px]">
        It's all about community engagement and spreading
      </p>
      <p className="hidden md:flex justify-center items-center w-full md:w-auto md:h-[34.6px] px-7 py-2 md:rounded-full bg-leemon-yellow mt-[10px] md:py-0 md:pt-[2px]">
        the word. So, without further ado, get your $JUICE together and:
      </p>
      <Parallax speed={10}>
        <div className="relative w-[311.10px] h-[305.26px] md:w-[633.31px] md:h-[615.8px] mt-[63.2px]">
          <Image
            src={
              isDark ? "/socials-join-club-dark.svg" : "/socials-join-club.svg"
            }
            fill
            alt="join the club"
          />
        </div>
      </Parallax>
      <Parallax speed={5}>
        <div className="flex items-center gap-[49.63px] md:gap-[69.63px] mt-[49.1px]">
          <Link href="#" target="_blank">
            <div className="relative w-[42.1px] h-[28.4px] md:w-[72.1px] md:h-[58.4px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-md">
              <Image src="/twitter-big.svg" fill alt="twitter" />
            </div>
          </Link>

          <Link href="#" target="_blank">
            <div className="relative w-[41.79px] h-[25.25px] md:w-[71.79px] md:h-[55.25px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-md">
              <Image src="/discord-big.svg" fill alt="discord" />
            </div>
          </Link>

          <Link href="#" target="_blank">
            <div className="relative w-[32.15px] h-[26.25px] md:w-[62.15px] md:h-[54.25px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-md">
              <Image src="/telegram-big.svg" fill alt="telegram" />
            </div>
          </Link>

          <Link href="#" target="_blank">
            <div className="relative w-[51.65px] h-[24px] md:w-[91.65px] md:h-[52px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-md">
              <Image src="/medium-big.svg" fill alt="medium" />
            </div>
          </Link>
        </div>
      </Parallax>
    </div>
  );
}
