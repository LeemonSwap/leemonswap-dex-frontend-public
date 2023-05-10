import Image from "next/image";
import ButtonColor from "../buttonColor";
import { buttonCollor } from "../../utils/enums";

export default function BuyJuice() {
  return (
    <div className="relative flex flex-col text-center items-center bg-leemon-purple-mid xl:h-[583px] bg-home-juice-splash bg-no-repeat bg-bottom pt-[106px] pb-14 xl:pb-0 px-4">
      {/* LEFT COINS */}
      <div className="hidden xl:block absolute top-[194.21px] left-[55px] animate-bounce animation-delay-75">
        <div className="relative w-[190.18px] h-[193.26px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin1.svg" fill alt="coin1" />
        </div>
      </div>

      <div className="hidden xl:block absolute top-[95.6px] left-[238.4px] animate-bounce animation-delay-200">
        <div className="relative w-[182.2px] h-[175.4px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin2.svg" fill alt="coin1" />
        </div>
      </div>

      <div className="hidden xl:block absolute top-[1px] left-[450.4px] animate-bounce animation-delay-400">
        <div className="relative w-[188.66px] h-[194.62px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin3.svg" fill alt="coin1" />
        </div>
      </div>

      <div className="hidden xl:block absolute top-[357.2px] left-[154.07px] animate-bounce animation-delay-300">
        <div className="relative w-[203.85px] h-[172.6px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin4.svg" fill alt="coin1" />
        </div>
      </div>

      <div className="hidden xl:block absolute top-[292.4px] left-[374px] animate-bounce animation-delay-100">
        <div className="relative w-[182.2px] h-[175.4px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin5.svg" fill alt="coin1" />
        </div>
      </div>

      {/* RIGHT COINS */}
      <div className="hidden xl:block absolute top-[27.3px] right-[382.3px] animate-bounce animation-delay-200">
        <div className="relative w-[168.6px] h-[167.9px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin6.svg" fill alt="coin1" />
        </div>
      </div>

      <div className="hidden xl:block absolute top-[67.65px] right-[220.75px] animate-bounce animation-delay-75">
        <div className="relative w-[191.88px] h-[191.65px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin7.svg" fill alt="coin1" />
        </div>
      </div>

      <div className="hidden xl:block absolute top-[204.75px] right-[398.69px] z-20 animate-bounce animation-delay-300">
        <div className="relative w-[186.83px] h-[196.1px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin8.svg" fill alt="coin1" />
        </div>
      </div>

      <div className="hidden xl:block absolute top-[323.1px] right-[304.6px] animate-bounce animation-delay-400">
        <div className="relative w-[170.7px] h-[164.1px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl scale-75 2xl:scale-100">
          <Image src="/coin9.svg" fill alt="coin1" />
        </div>
      </div>

      <p className="font-bold20 max-w-[600px] text-[60px] xl:text-[80px] text-leemon-green leading-[70px] xl:leading-[80px] outlined z-20">
        $JUICE IS THE ANSWER
      </p>
      <p className="font-book20 text-[17.7px] max-w-[340px] text-white mt-[30px] mb-[46px] z-20">
        Our native token is the key to unlock all $HBAR rewards
      </p>
      <div className="z-20">
        <ButtonColor color={buttonCollor.purple}>Buy $JUICE</ButtonColor>
      </div>
    </div>
  );
}
