import Image from "next/image";
import { useContext } from "react";
import { StateContext } from "../context/stateContext";
import { Token } from "../utils/types";

interface TokenInput {
  token: Token;
}
export default function TokenInput({ token }: TokenInput) {
  const { isDark, setShowTokenModal } = useContext(StateContext);
  return (
    <div
      className="
        flex flex-col min-w-[306px] bg-leemon-gray-light dark:bg-leemon-purple-mid2 
        rounded-[10px] px-[16px] pb-[8px]
      "
    >
      <div className="flex justify-between items-center w-full mt-[16px] mb-[11px] gap-[3px]">
        <button
          onClick={() => setShowTokenModal(true)}
          className="flex justify-center items-center bg-leemon-gray-light2 
          dark:bg-leemon-purple-dark3 rounded-[10px] h-[58px] p-[9px]
          "
        >
          <div className="relative min-w-[38.09px] min-h-[38.04px]">
            <Image src={token?.imageSrc} fill alt="token" />
          </div>
          <span className="font-semibold20 text-[16px] text-right text-leemon-purple-dark2 dark:text-leemon-gray-light ml-[15.91px] mt-1">
            {token?.name}
          </span>

          <Image
            src={isDark ? "/arrow-down-dark.svg" : "/arrow-down.svg"}
            width={10}
            height={10}
            className="ml-[6px] min-w-[10px] mt-1"
            alt="arrow down"
          />
        </button>
        <input
          type="text"
          name=""
          id=""
          className="
            font-book20 text-[16px] placeholder-leemon-purple-dark2 dark:placeholder-leemon-gray-light
          text-leemon-purple-dark2 dark:text-leemon-gray-light outline-none bg-leemon-gray-light2 
          dark:bg-leemon-purple-dark3 h-[58px] rounded-[10px] text-right w-full px-[15px]"
          placeholder="0.0"
        />
      </div>
      <div className="flex justify-between items-center w-full pr-[8px] text-leemon-purple-dark2 dark:text-leemon-green-light3">
        <div className="font-book20 text-[10px] ">
          Balance:{" "}
          <span>
            {token?.balance.toLocaleString("en-us", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 5,
            })}
          </span>
        </div>

        <div className="font-book20 text-[10px]">50%- 100%</div>
      </div>
    </div>
  );
}

// w-[119px] h-[53px] p-10
