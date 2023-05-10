import Image from "next/image";
import { mainColor } from "../../utils/enums";

interface StatsBox {
  iconUrl: string;
  value: string;
  label: string;
  color: mainColor;
  value2?: string;
}
export default function StatsBox({
  iconUrl,
  value,
  label,
  color,
  value2,
}: StatsBox) {
  return (
    <div
      className="
        flex flex-col justify-between w-[331.5px] min-h-[208px] xl:w-[251.5px] xl:min-h-[238px] bg-leemon-purple rounded-2xl p-[20px] drop-shadow-shape2
        border-[0.5px] border-leemon-purple-dark text-start transition delay-75 hover:drop-shadow-shapeDeep
      "
    >
      <div className="w-full h-full">
        <div className="relative w-[30px] h-[30px]">
          <Image src={iconUrl} fill alt={label} />
        </div>
      </div>
      <div className="flex flex-col w-full h-full">
        <span
          className={`text-[55px] font-bold20 outlined ${
            color === mainColor.yellow
              ? "text-leemon-yellow"
              : "text-leemon-green"
          }`}
        >
          {value}
          {value2 && <span className="text-[28.8px] ml-2">{value2}</span>}
        </span>
        <span className="font-book20 text-[16px] text-white">{label}</span>
      </div>
    </div>
  );
}
