import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { StateContext } from "../context/stateContext";
import { useHashconnectService } from "../context/hashConnectContext";
import { buttonCollor } from "../utils/enums";
import ButtonColor from "./buttonColor";
import QRCode from "./qrCode";
import { motion } from "framer-motion";

interface WalletModal {
  open: boolean;
  onClose: () => void;
}

export const getEllipsisTxt = (str: string | undefined, n = 15) => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
  }
  return "";
};

export default function WalletModal() {
  const {
    connectToExtension,
    pairingData,
    pairingString,
    disconnect,
    isPaired,
  } = useHashconnectService();

  const { isDark, showWalletModal, setShowWalletModal } =
    useContext(StateContext);
  const [applyEffect, setApplyEffect] = useState(false);


  useEffect(() => {
    if (showWalletModal) {
      document.documentElement.style.overflow = "hidden";
      setApplyEffect(true);
      return;
    }

    document.documentElement.style.overflow = "";
    setApplyEffect(false);
  }, [showWalletModal]);

  return (
    <div
      className={`
        top-0 left-0 right-0 bottom-0 w-full h-full
        z-[900] overflow-hidden bg-leemon-purple-dark4 bg-opacity-[0.79] flex flex-col items-center pt-[10px] lg:pt-[100px] backdrop-blur-[2px]
        ${showWalletModal ? "fixed" : "hidden"}
      `}
    >
      <div
        className={`
          flex flex-col w-[379px] sm:w-[410px] justify-center
          transition ease-linear delay-100 duration-150 scale-100
          
          ${applyEffect ? "scale-100" : "scale-0"}
        `}
      >
        <header
          className="
            flex items-center justify-between
            h-[74px] rounded-t-[20px] bg-leemon-green-light3 dark:bg-leemon-purple-mid2
            border-[2px] border-leemon-purple-dark2 font-semibold20 
            text-[16px] text-leemon-purple-mid2 dark:text-white pl-[33px] pt-1
          "
        >
          {isPaired() ? "Wallet Connected" : "Connect Wallet"}
          <button
            className="pr-[23px]"
            onClick={() => setShowWalletModal(false)}
          >
            <Image
              src={isDark ? "/close-tokens-dark.svg" : "/close-tokens.svg"}
              width={28}
              height={28}
              alt="close"
            />
          </button>
        </header>
        <main
          className="
            flex flex-col justify-center
            bg-leemon-gray-light2 dark:bg-leemon-purple-dark3
            rounded-b-[20px] border-[2px] border-t-0 
            border-leemon-purple-dark2 px-[33px] pt-[33px] pb-[29px]
            font-book20 text-[12px] text-leemon-purple-mid2 dark:text-white
            leading-[20px]
          "
        >
          {!isPaired() && pairingString !== undefined && (
            <div className="flex flex-col sm:gap-[8px] w-full h-full py-[6px]">
              <label className="flex items-center gap-2 font-semibold20 text-leemon-purple-dark2 dark:text-white">
                <span>
                  {/* Hedera Connection */}
                  Browser Extension
                </span>
                {/* <Tooltip direction={tooltipDirection.bottom}>
                  Some stuff about how install hedera wallet
                </Tooltip> */}
              </label>
              {/* <p className="pb-2">Lorem ipsum dolor sit amet, consectetu.</p> */}

              <ButtonColor
                action={() => connectToExtension()}
                color={buttonCollor.lightGreen}
                small
              >
                {/* Pair Dapp */}
                Hashpack
              </ButtonColor>

              <label className="flex items-center gap-2 font-semibold20 text-leemon-purple-dark2 dark:text-white pt-[33px]">
                {/* Or scan to connect */}
                QR Code
              </label>
              {/* <p className="leading-[23px] pb-[7px]">
                Lorem ipsum dolor sit amet, consectetu on your mobile phone and
                scan.
              </p> */}
              <div
                className="
                  flex justify-center items-center w-full h-auto 
                  bg-white
                  rounded-[10px] py-10
                "
              >
                <QRCode text={pairingString} isDark={isDark} />
              </div>

              <label className="font-semibold20 text-leemon-purple-dark2 dark:text-white pt-2">
                Pair Code
              </label>
              <p className="flex justify-between items-center gap-2 px-5 w-full h-[40px] bg-white dark:bg-leemon-purple-dark2 text-leemon-purple-dark2 dark:text-white rounded-[10px]">
                {getEllipsisTxt(pairingString!)}

                <motion.button
                  onClick={() => navigator.clipboard.writeText(pairingString!)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={isDark ? "/copy-dark.svg" : "/copy.svg"}
                    width={15}
                    height={20}
                    alt="copy pair code"
                  />
                </motion.button>

                {/* <button
                  onClick={() => navigator.clipboard.writeText(pairingString!)}
                >
                  <Image
                    src={isDark ? "/copy-dark.svg" : "/copy.svg"}
                    width={15}
                    height={20}
                    alt="copy pair code"
                  />
                </button> */}
              </p>
            </div>
          )}

          {isPaired() && (
            <div className="flex flex-col w-full h-full font-book20 text-leemon-purple-dark2 dark:text-white text-[12px]">
              <div className="flex justify-between items-center">
                <label>Account</label>
                <span className="font-semibold20">
                  {pairingData?.accountIds[0]}
                </span>
              </div>
              <div className="w-full h-[1px] bg-leemon-gray-light3 my-[10px]" />
              <div className="flex justify-between items-center">
                <label>Network</label>
                <span className="font-semibold20">{pairingData?.network}</span>
              </div>

              <div className="flex justify-center items-center pt-[33px]">
                <ButtonColor
                  action={() => disconnect()}
                  color={buttonCollor.lightGreen}
                  small
                >
                  Disconect
                </ButtonColor>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
