import Link from "next/link";
import Image from "next/image";
import Balance from "./balance";
import ButtonColor from "./buttonColor";
import { buttonCollor } from "../utils/enums";
import { FOOTER_NAV } from "../utils/constants";
import { useState } from "react";
import Container from "./container";

export default function Footer() {
  const [selected, setSelected] = useState(FOOTER_NAV[0]);
  return (
    <footer className="flex flex-col min-h-[470.4px] bg-leemon-purple-dark py-[43.7px] px-4 lg:px-10 z-10">
      <Container>
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between">
          <nav className="flex flex-col gap-[19.12px] sm:pl-[22px]">
            {FOOTER_NAV.map((item, index) => (
              <Link
                key={index}
                className={`
                text-[14px]
                hover:text-leemon-yellow transition-all delay-75 ease-in-out hover:ml-2
                ${
                  item === selected
                    ? "font-semibold20 text-leemon-yellow"
                    : "font-book20 text-white"
                }
              `}
                href={item.url}
                target={item.target}
                onClick={() => setSelected(item)}
              >
                {item.title}
              </Link>
            ))}

            <div className="flex items-center gap-8 mt-7">
              <Link href="#" target="_blank">
                <div className="relative w-[34.6px] h-[28px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl">
                  <Image src="/twitter.svg" fill alt="twitter" />
                </div>
              </Link>

              <Link href="#" target="_blank">
                <div className="relative w-[34.35px] h-[26.49px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl">
                  <Image src="/discord.svg" fill alt="discord" />
                </div>
              </Link>

              <Link href="#" target="_blank">
                <div className="relative w-[29.81px] h-[26.09px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl">
                  <Image src="/telegram.svg" fill alt="telegram" />
                </div>
              </Link>

              <Link href="#" target="_blank">
                <div className="relative w-[44.54px] h-[25.86px] transition delay-50 ease-in-out hover:scale-110 hover:drop-shadow-xl">
                  <Image src="/medium.svg" fill alt="medium" />
                </div>
              </Link>
            </div>
          </nav>
          <div
            className="
              flex justify-center items-center 
              w-[270px] sm:ml-4
              rounded-full bg-leemon-green
              lg:w-[320px] lg:h-[60px] lg:ml-0
            "
          >
            <div className="relative w-[275.47px] h-[46.62px] scale-75 lg:scale-100">
              <Image src="/logo.svg" fill alt="balance" />
            </div>
          </div>
        </div>
        <div className="flex h-[1px] bg-leemon-purple mt-10 mb-7" />
        <div className="flex flex-row justify-between lg:justify-end items-center gap-8">
          <Balance color={buttonCollor.green} />
          <div className="block lg:hidden">
            <ButtonColor color={buttonCollor.yellow} small>
              Buy $JUICE
            </ButtonColor>
          </div>
          <div className="hidden lg:block">
            <ButtonColor color={buttonCollor.yellow}>Buy $JUICE</ButtonColor>
          </div>
        </div>
      </Container>
    </footer>
  );
}
