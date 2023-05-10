import Image from "next/image";
import { buttonCollor } from "../utils/enums";

interface Balance {
  color?: buttonCollor;
}
export default function Balance({ color = buttonCollor.purple }: Balance) {
  return (
    <div
      className={`flex flex-row items-center gap-3 font-book20 dark:text-white ${
        color === buttonCollor.purple
          ? "text-leemon-purple-dark"
          : color === buttonCollor.yellow
          ? "text-leemon-yellow"
          : "text-leemon-green-light"
      }`}
    >
      <div className="relative w-[40px] h-[40px]">
        <Image src="/leemon-balance.svg" fill alt="balance" />
      </div>
      <span className="text-[13px] font-normal">$ 0.065</span>
    </div>
  );
}
