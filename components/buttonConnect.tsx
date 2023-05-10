import { useContext } from "react";
import { StateContext } from "../context/stateContext";
import { useHashconnectService } from "../context/hashConnectContext";
import Image from "next/image";

export default function ButtonConnect() {
  const { setShowWalletModal } = useContext(StateContext);
  const { isPaired, pairingData } = useHashconnectService();
  return (
    <button
      className={`
          flex items-center justify-center w-full sm:w-max h-[40px] rounded-full font-semibold20
          px-[20px]
          text-leemon-purple-dark text-[15px]
          border-[1px] border-leemon-purple-dark drop-shadow-button
          transition ease-in-out duration-200
          bg-leemon-green hover:bg-leemon-yellow hover:drop-shadow-buttonDeep
      `}
      onClick={() => setShowWalletModal(true)}
    >
      {isPaired() ? (
        <div className="flex gap-2 justify-center items-center w-full">
          <Image
            src={"/wallet-icon.svg"}
            width={22}
            height={22}
            alt="wallet"
            className="text-red-300 stroke-red-300 fill-red-300"
          />
          <span className="pt-[2px]">{pairingData?.accountIds[0]}</span>
        </div>
      ) : (
        "Connect Wallet"
      )}
    </button>
  );
}
