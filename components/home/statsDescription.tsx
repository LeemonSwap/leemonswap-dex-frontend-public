import Image from "next/image";
import Container from "../container";
import ButtonColor from "../buttonColor";
import { buttonCollor } from "../../utils/enums";
import StatsBox from "./statsBox";
import { mainColor } from "../../utils/enums";
import Banner from "./banner";
import { Parallax } from "react-scroll-parallax";
import { useContext } from "react";
import { StateContext } from "../../context/stateContext";

interface StatsDescription {
  bannerVisible?: boolean;
}

export default function StatsDescription({
  bannerVisible = false,
}: StatsDescription) {
  const { isDark } = useContext(StateContext);
  return (
    <div
      className={`
        flex flex-col w-full ${
          bannerVisible ? "lg:h-[2160.7px]" : "lg:h-[1802.7px]"
        } bg-gradient-to-t from-leemon-green-light2 via-transparent to-transparent
        dark:from-leemon-purple-dark2 dark:via-leemon-purple-dark3  dark:to-leemon-purple-dark3
      `}
    >
      {/* TOP DESCRIPTION */}
      <div
        className={`flex justify-center items-center w-full ${
          bannerVisible ? "xl:h-[1412.6px]" : "xl:h-[1054.6px]"
        } bg-home-wave-1 dark:bg-home-wave-1-dark bg-cover bg-repeat-x bg-bottom  pt-[50px] xl:pt-[92.74px]`}
      >
        <Container>
          <Banner href="#" src="/banner.svg" visible={bannerVisible} />
          <div
            className={`flex flex-col md:flex-row h-full justify-center items-center xl:gap-24 px-4 ${
              bannerVisible && "mt-[51px]"
            }`}
          >
            <div className="flex flex-col text-start">
              <p
                className="
                  flex justify-center items-center w-[139.9px] h-[29.8px] rounded-full 
                  bg-gradient-to-r from-leemon-yellow  to-leemon-green2 font-book20 
                  text-[13px] text-leemon-purple-dark tracking-[0.12rem] pt-[2px]
                "
              >
                IT'S FRESH
              </p>
              <p className="font-bold20 text-[60px] lg:text-[80px] text-leemon-green leading-[60px] lg:leading-[80px] outlined mt-[21.19px]">
                A DEX LIKE
                <br />
                NO OTHER
              </p>
              <p
                className="
                  font-book20 text-[18px] text-leemon-purple-dark dark:text-white
                  max-w-auto mt-[22px] mb-[38.58px]
                  md:max-w-[430px]
                  xl:max-w-full 
                "
              >
                Trade in the easiest, cheapest and most efficient way using{" "}
                <span className="font-semibold20">
                  LeemonSwap's DEX Aggregator
                </span>
                .
              </p>

              <ButtonColor color={buttonCollor.purple}>Swap</ButtonColor>
            </div>

            <div className="relative">
              <Parallax
                speed={10}
                translateX={[-30, 10, "easeInOut"]}
                scale={[0, 1, "easeOutBack"]}
              >
                <Image
                  src={isDark ? "/home-cloud-1-dark.svg" : "/home-cloud-1.svg"}
                  width={312.72}
                  height={320.64}
                  alt="juice"
                  className="w-[312.72px] h-[320.64px] xl:w-[712.72px] xl:h-[620.64px] mt-10"
                />
              </Parallax>
              <div
                className="
                  absolute top-[-20px] left-[0px] flex justify-center
                  xl:left-[0px]
                "
              >
                <Parallax speed={10} translateY={[-10, 10]}>
                  <Image
                    src="/home-leemon-1.svg"
                    width={358.31}
                    height={417.56}
                    alt=""
                    className="w-[288.31px] h-[417.56px] 
                  xl:w-[508.97px] xl:h-[586.5px]"
                  />
                </Parallax>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center pt-[63.4px] xl:pt-[113.4px]">
            <p className="flex justify-center items-center w-[140.9px] h-[29.8px] rounded-full bg-gradient-to-r from-leemon-yellow to-leemon-green2 font-book20 text-[13px] text-leemon-purple-dark z-20 mb-[20px] tracking-[0.12rem] pt-[2px]">
              IT'S JUICY
            </p>
            <p className="font-bold20 text-[40px] xl:text-[80px] text-leemon-purple leading-[40px] xl:leading-[80px] outlined mt-[21.19px] max-w-[900px]">
              TAKE A LOOK AT THESE JUICY NUMBERS:
            </p>
            <p className="font-book20 xl:text-[18px] text-leemon-purple-dark dark:text-white mt-[22px]">
              No boasting. I mean... just look at them.
            </p>
            <Parallax speed={10}>
              <div className="flex items-center justify-center flex-wrap max-w-[900px] pt-[54.23px] gap-[31.5px] pb-14 xl:pb-0">
                <StatsBox
                  color={mainColor.yellow}
                  iconUrl="/coins.svg"
                  value="101.7M"
                  label="TVL"
                />

                <StatsBox
                  color={mainColor.green}
                  iconUrl="/water.svg"
                  value="200.4M"
                  label="Volume"
                />

                <StatsBox
                  color={mainColor.yellow}
                  iconUrl="/leemon-small.svg"
                  value="1.23M"
                  label="Juice Marketcap"
                />

                <StatsBox
                  color={mainColor.green}
                  iconUrl="/lock.svg"
                  value="45%"
                  label="of Juice locked"
                />

                <StatsBox
                  color={mainColor.yellow}
                  iconUrl="/clock.svg"
                  value="02"
                  value2="weeks"
                  label="Average lock time"
                />
              </div>
            </Parallax>
          </div>
        </Container>
      </div>
    </div>
  );
}
