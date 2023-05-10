import Image from "next/image";
import { useEffect, useContext, useState } from "react";
import { StateContext } from "../context/stateContext";

export default function BigSwitch() {
  return (
    <label className="flex items-center relative w-[160px] h-[27px] cursor-pointer select-none big-switcher">
      <input
        type="checkbox"
        onChange={() => {}}
        className="appearance-none cursor-pointer w-[160px] h-[27px] rounded-full outline-none bg-white dark:bg-leemon-purple-dark"
      />

      <div className="absolute left-0 z-10 flex justify-between items-center w-full text-[12px]">
        <span className="text-center w-full active">Active</span>
        <span className="text-center w-full inactive">Inactive</span>
      </div>
      <span
        className={`
        left-0 absolute rounded-full transform transition-transform
          w-[84px] h-[27px] bg-leemon-green 
          z-0 ease-in
        `}
      />
    </label>
  );
}
