import Image from "next/image";
import { useEffect, useContext, useState } from "react";
import { StateContext } from "../context/stateContext";

export default function ThemeSwitcher() {
  const { isDark, setIsDark } = useContext(StateContext);
  const [applyEffect, setApplyEffect] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");

    isDark ? html?.classList.add("dark") : html?.classList.remove("dark");

    setApplyEffect(false);
    setTimeout(() => {
      setApplyEffect(isDark);
    }, 100);
  }, [isDark, setIsDark]);

  return (
    <label className="flex items-center relative w-[63px] h-[34.45px] cursor-pointer select-none theme-switcher">
      <input
        type="checkbox"
        onChange={() => setIsDark(!isDark)}
        className="appearance-none cursor-pointer w-[63px] h-[34.45px] rounded-full outline-none bg-leemon-purple-dark"
      />

      <span className="absolute left-[7.64px] z-10">
        <Image src={"/light.svg"} width={20} height={20} alt="light" />
      </span>
      <span className="absolute right-[7.64px] z-10">
        <Image src={"/dark.svg"} width={20} height={20} alt="dark" />
      </span>
      <span
        className={`
        left-[4px] absolute rounded-full transform transition-transform
          w-[26.82px] h-[26.82px] bg-gradient-to-r from-leemon-yellow to-leemon-green-light3 
          z-0 ease-in
        `}
      />
    </label>
  );
}
