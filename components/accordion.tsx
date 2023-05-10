import Image from "next/image";
import { ReactElement } from "react";

interface Accordion {
  iconHref: string;
  iconWidth: number;
  iconHeight: number;
  iconPositionClass: string;
  headerChildren: ReactElement;
  children: ReactElement;
  changeAction?: any;
}

export default function Accordion({
  iconHref,
  iconWidth,
  iconHeight,
  iconPositionClass,
  headerChildren,
  children,
  changeAction,
}: Accordion) {
  return (
    <div className="flex w-full h-full">
      <div className="relative w-full overflow-hidden">
        <input
          onChange={() => changeAction()}
          type="checkbox"
          className={`
            peer 
            absolute ${iconPositionClass && iconPositionClass}
            opacity-0
            h-5 w-5 z-10
            cursor-pointer
          `}
        />
        {headerChildren}

        {/* Arrow Icon */}
        <div
          className={`
            absolute ${iconPositionClass && iconPositionClass}
            text-white
            transition-transform duration-500
            rotate-0 peer-checked:rotate-180
          `}
        >
          <Image
            src={iconHref}
            width={iconWidth}
            height={iconHeight}
            alt="icon"
          />
        </div>

        {/* Content */}
        <div
          className="
            overflow-hidden 
            transition-all duration-500
            max-h-0 peer-checked:max-h-40
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
