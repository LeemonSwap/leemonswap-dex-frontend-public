import Image from "next/image";
import { useEffect, useContext, useState } from "react";
import { StateContext } from "../context/stateContext";

interface Switch {
  title: string;
}
export default function Switch({ title }: Switch) {
  const [checked, setChecked] = useState(false);
  const [applyEffect, setApplyEffect] = useState(false);

  useEffect(() => {
    setApplyEffect(false);
    setTimeout(() => {
      setApplyEffect(checked);
    }, 100);
  }, [checked, setChecked]);

  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center relative w-[41px] h-[23px] cursor-pointer select-none switcher">
        <input
          type="checkbox"
          onChange={() => {}}
          className="appearance-none cursor-pointer w-[41px] h-[23px] rounded-full outline-none bg-white dark:bg-leemon-purple-dark"
        />
        <span
          className={`
        left-[2px] absolute rounded-full transform transition-transform
          w-[19px] h-[19px] bg-leemon-green 
          z-0 ease-in
        `}
        />
      </label>
      <span className="font-semibold20 text-[12px] text-leemon-purple-dark2 dark:text-white min-w-[80px]">
        {title}
      </span>
    </div>
  );
}
