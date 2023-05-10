import Image from "next/image";
import ButtonColor from "../buttonColor";
import { buttonCollor } from "../../utils/enums";
import Container from "../container";
import { Parallax } from "react-scroll-parallax";

export default function Pools() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center pt-[80px] xl:pt-[200px]">
      <div className="w-full bg-home-wave-2 dark:bg-home-wave-2-dark bg-cover bg-white dark:bg-leemon-purple-dark3 relative text-center pb-[250px] mb-[-280px] xl:mb-[-260px]">
        <div className="flex flex-col">
          <Container>
            <div className="flex flex-col xl:flex-row h-full justify-center px-4 xl:px-0">
              <div className="flex flex-col text-start md:pl-[100px] lg:pl-[170px] xl:pl-0">
                <p className="flex justify-center items-center w-[182.6px] h-[29.8px] rounded-full bg-gradient-to-r from-leemon-yellow  to-leemon-green2 font-book20 text-[13px] text-leemon-purple-dark tracking-[0.12rem] pt-[2px]">
                  IT'S FRUITFUL
                </p>
                <p className="font-bold20 text-[80px] text-leemon-green leading-[80px] outlined mt-[21.19px]">
                  RELAX & EARN
                </p>
                <p className="font-book20 text-[18px] text-leemon-purple-dark dark:text-white mt-[18px] mb-[33.38px] max-w-[530px]">
                  Stake or lock your{" "}
                  <span className="font-semibold20">$JUICE</span> to earn a
                  percentage of the sell tax, platform fees,{" "}
                  <span className="font-semibold20">$JUICE</span> emissions and
                  governance votes.
                </p>

                <ButtonColor color={buttonCollor.green}>Earn now</ButtonColor>
              </div>
              <div className="flex justify-end sm:pr-20">
                <Parallax speed={10}>
                  <div
                    className=" 
                  relative 
                  w-[347.44px] h-[304.24px] mt-10
                  sm:w-[547.44px] sm:h-[504.24px] sm:mb-16 sm:mt-0
                  md:w-[547.44px] md:h-[504.24px] md:mb-16
                  lg:w-[547.44px] lg:h-[504.24px] lg:mb-0
                "
                  >
                    <Image src="/home-cloud-2.svg" fill alt="juice" />

                    <div
                      className="
                    flex justify-center absolute
                    top-[15px] left-[-33px] 
                    sm:top-[-85px] sm:left-[10px]
                    md:top-[-85px] md:left-[10px]
                    lg:top-[-85px] lg:left-[-110px]
                  "
                    >
                      <div
                        className="
                      relative 
                      w-[390.3px] h-[253.48px]
                      sm:w-[603.3px] sm:h-[453.48px]
                      md:w-[613.3px] md:h-[473.48px]
                      lg:w-[613.3px] lg:h-[473.48px]
                    "
                      >
                        <Image src="/home-leemon-2.svg" fill alt="" />
                      </div>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </Container>

          {/* SECTION 3 */}
          <Container>
            <div
              className="flex flex-col justify-center items-center h-full
              md:flex-row md:gap-6
              lg:gap-24 px-4 lg:px-0
            "
            >
              {/* DESKTOP ---------------- */}
              <Parallax speed={-5}>
                <div
                  className="
                  hidden md:block relative
                  w-[412.72px] h-[420.64px]
                  lg:w-[612.72px] lg:h-[620.64px]
                "
                >
                  <Image src="/home-cloud-3.svg" fill alt="juice" />
                  <div className="absolute top-0 left-0 flex justify-center">
                    <div
                      className="
                      relative 
                      md:w-[358.31px] md:h-[467.56px]
                      lg:w-[558.31px] lg:h-[617.56px]

                    "
                    >
                      <Image src="/home-leemon-3.svg" fill alt="" />
                    </div>
                  </div>
                </div>
              </Parallax>
              {/* ------------------------ */}
              <div className="flex flex-col text-start pt-10 md:pt-20 xl:pt-0">
                <p className="flex justify-center items-center w-[289.1px] h-[29.8px] rounded-full bg-gradient-to-r from-leemon-yellow via-leemon-yellow to-leemon-green font-book20 text-[13px] text-leemon-purple-dark tracking-[0.12rem] pt-[2px]">
                  DID I SAY IT'S FRUITFUL?
                </p>
                <p
                  className="
                    font-bold20 text-[66px] text-leemon-yellow leading-[65px]
                    outlined mt-[21.19px]
                    sm:leading-[70px]
                    xl:text-[80px]  xl:leading-[80px]
                  "
                >
                  VISIT OUR
                  <br />
                  ORCHARDS
                </p>
                <p className="font-book20 text-[18px] text-leemon-purple-dark mt-[22px]">
                  Stake your LP tokens for additional
                </p>
                <p className="font-semibold20 text-[18px] text-leemon-purple-dark mb-[10px] lg:mb-[40.89px]">
                  $JUICE and $HBAR rewards.
                </p>

                <ButtonColor color={buttonCollor.purple}>Farm now</ButtonColor>
              </div>
              {/* MOBILE ---------------- */}
              <div className="relative md:hidden w-[342.72px] h-[360.64px] mb-[-70px] mt-[30px]">
                <Image src="/home-cloud-3.svg" fill alt="juice" />

                <div className="absolute top-0 left-0 flex justify-center">
                  <div className="relative w-[278.31px] h-[367.56px]">
                    <Image src="/home-leemon-3.svg" fill alt="" />
                  </div>
                </div>
              </div>
              {/* ------------------------ */}
            </div>
          </Container>
        </div>
      </div>

      {/* SECTION 4 */}

      <div className="flex flex-col w-full bg-home-wave-3 bg-no-repeat bg-cover relative pt-[480px] xl:pt-[560px] pb-[100px]">
        <Container extraClass="flex-col items-center text-center">
          <div className="absolute top-[120px] left-0 flex justify-center w-full h-[392.82px]">
            <div className="relative w-[660px] h-[306.72px]">
              <Image src="/home-cloud-4.svg" fill alt="" />
            </div>
          </div>

          <div className="absolute top-[130px] left-0 flex justify-center w-full h-[392.82px]">
            <div className="relative w-[782.84px] h-[392.82px]">
              <Image src="/home-leemon-4.svg" fill alt="" />
            </div>
          </div>

          <p className="flex justify-center items-center w-[140.9px] h-[29.8px] rounded-full bg-gradient-to-r from-leemon-yellow to-leemon-green2 font-book20 text-[13px] text-leemon-purple-dark z-20 tracking-[0.12rem] pt-[2px]">
            IT'S SWEET
          </p>
          <p
            className="
              font-bold20
              text-leemon-yellow outlined mt-[21.19px] max-w-[600px]
              text-[60px] leading-[60px]
              xl:text-[80px] xl:leading-[80px]"
          >
            WATER THY LEEMON SEEDS
          </p>
          <p className="font-book20 xl:text-[18px] text-white mt-[22px] px-4 mb-[20px] xl:mb-[40.89px] max-w-[630px]">
            Stake your $JUICE, $xJUICE or $vxJUICE at our{" "}
            <span className="font-semibold20">launchpools</span> and earn tokens
            from new projects launching on Hedera.
          </p>

          <ButtonColor color={buttonCollor.purple} disabled>
            Coming soon
          </ButtonColor>
        </Container>
      </div>
    </div>
  );
}
