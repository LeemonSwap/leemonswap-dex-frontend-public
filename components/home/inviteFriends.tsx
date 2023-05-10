import Image from "next/image";
import { useState, useContext } from "react";
import ButtonColor from "../buttonColor";
import { buttonCollor } from "../../utils/enums";
import { Parallax } from "react-scroll-parallax";
import { StateContext } from "../../context/stateContext";

export default function InviteFriends() {
  const { isDark } = useContext(StateContext);
  const [partners, _] = useState([
    {
      src: "/hbar-foundation.svg",
      srcDark: "/hbar-foundation-dark.svg",
      width: 331.92,
      height: 99,
    },
    {
      src: "/fortknoxster.svg",
      srcDark: "/fortknoxster-dark.svg",
      width: 354.97,
      height: 105.88,
    },
    {
      src: "/hashp.svg",
      srcDark: "/hashp-dark.svg",
      width: 331.92,
      height: 99,
    },
    {
      src: "/hangry-barbouns.svg",
      srcDark: "/hangry-barbouns-dark.svg",
      width: 389.54,
      height: 22.6,
    },
    {
      src: "/hbarvox.svg",
      srcDark: "/hbarvox-dark.svg",
      width: 284,
      height: 73,
    },
    {
      src: "/creammies.svg",
      srcDark: "/creammies-dark.svg",
      width: 268.39,
      height: 80.05,
    },
    {
      src: "/gangsters.svg",
      srcDark: "/gangsters-dark.svg",
      width: 308.75,
      height: 179.21,
    },
    {
      src: "/earthlings.svg",
      srcDark: "/earthlings-dark.svg",
      width: 237,
      height: 153.1,
    },
  ]);
  return (
    <div
      className="
        flex flex-col justify-center items-center min-h-[1787px] pb-[57.4px]
        bg-gradient-to-t from-leemon-green2 via-leemon-green3/20 to-white pt-[96.7px]
      dark:from-leemon-purple-dark3 dark:via-leemon-purple-dark2/80 dark:to-leemon-purple-dark3
      "
    >
      <p className="flex justify-center items-center w-[157.1px] h-[29.8px] rounded-full bg-gradient-to-r from-leemon-yellow to-leemon-green2 font-book20 text-[13px] text-leemon-purple-dark tracking-[0.12rem] pt-[2px]">
        IT'S RELIABLE
      </p>
      <p className="font-bold20 text-[50px] md:text-[80px] text-leemon-green leading-[60px] md:leading-[80px] outlined mt-[21.19px]">
        WE'LL NEVER <br />
        JUICE ALONE
      </p>
      <p className="font-book20 text-[18px] text-leemon-purple-dark dark:text-white mt-[21.9px] px-8 text-center md:px-0 md:text-start">
        This zesty bunch is with us. Quite a splendid line up, ain’t it?
      </p>

      <div className="flex flex-wrap justify-center gap-10 md:gap-6 items-center max-w-[771px] md:max-h-[571.26px] mt-[63.03px]">
        {partners.map((partner, index) => (
          <Parallax key={index} speed={index}>
            <Image
              key={index}
              src={isDark ? partner.srcDark : partner.src}
              width={partner.width}
              height={partner.height}
              alt={`partner ${index + 1}`}
              className="scale-75 md:scale-100"
            />
          </Parallax>
        ))}
      </div>

      <p className="flex items-center h-[34.6px] px-14 rounded-full bg-leemon-green font-book20 text-[14px] md:text-[18px] text-leemon-purple-dark mt-[71.9px] pt-[2px]">
        And last but not least, the audit
      </p>
      <p className="flex items-center h-[34.6px] px-10 md:px-14 rounded-full bg-leemon-green mt-[10px] font-book20 text-[13px] md:text-[18px] text-leemon-purple-dark pt-[2px]">
        you're so eagerly scrolling to see. Ta-da!
      </p>
      <Image
        src={isDark ? "/certik-dark.svg" : "/certik.svg"}
        width={561.04}
        height={167.34}
        alt="certik"
        className="mt-[45.9px]"
      />

      <div
        className="
          flex flex-col px-4 bg-leemon-purple relative py-[20px] my-8 
          sm:rounded-2xl
          md:w-[707px] md:px-[47.03px] md:my-[101.7px]
          xl:w-[1107px] xl:px-[47.03px] xl:my-[101.7px]
        "
      >
        <p
          className="
            font-bold20 font-bold text-[31px] text-leemon-yellow outlined
            xl:text-[71.14px] 
          "
        >
          REFERRAL! REFERRAL!
        </p>
        <span
          className="
            font-book20 text-white mb-[10px]
            md:max-w-[450px] md:mb-4
            lg:max-w-auto
            xl:text-[17.17px] xl:mt-[-20px]
          "
        >
          Oh yes, we have those too! Get your friends involved and earn referral
          rewards!
        </span>
        <ButtonColor color={buttonCollor.green}>Get your code</ButtonColor>
        <div
          className="
            absolute top-[100px] right-[10px] 
            md:top-[-30px] md:right-[30px]
            xl:top-[-30px] xl:right-[20px]
          "
        >
          <Image
            src="/invite-your-friends.svg"
            width={276.05}
            height={313.71}
            alt="invite"
            className="
              w-[136px] h-[183.71px] 
              md:w-[176px] md:h-[213.71px]
              xl:w-[276px] xl:h-[313.71px]
            "
          />
        </div>
      </div>
    </div>
  );
}
