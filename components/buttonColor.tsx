import { ReactElement } from "react";
import { buttonCollor } from "../utils/enums";

interface ButtonColor {
  color: buttonCollor;
  children: string | ReactElement | ReactElement[];
  action?: () => void;
  disabled?: boolean;
  small?: boolean;
  mini?: boolean;
}
export default function ButtonColor({
  color,
  children,
  action = () => {},
  disabled = false,
  small = false,
  mini = false,
}: ButtonColor) {
  return (
    <button
      disabled={disabled}
      className={`
          flex items-center justify-center w-max rounded-full font-semibold20
           ${
             mini
               ? "pt-[3px] pb-[2px] text-[11px] px-[20.9px]"
               : small
               ? "py-[9px] text-[14px] max-w-[180.6px] px-[33.9px]"
               : "py-[9px] text-[14px] min-w-[180.6px] xl:py-[14.5px] xl:text-[18px] xl:min-w-[200.6px] px-[33.9px]"
           } 
          border-[1px] border-leemon-purple-dark
          transition ease-in-out duration-200
          ${
            color === buttonCollor.green
              ? `bg-leemon-green text-leemon-purple-dark ${
                  small || mini
                    ? "drop-shadow-buttonLight"
                    : "drop-shadow-button"
                } ${
                  !disabled &&
                  `hover:bg-leemon-yellow ${
                    small || mini
                      ? "hover:drop-shadow-buttonDeepLight"
                      : "hover:drop-shadow-buttonDeep"
                  }  hover:text-leemon-purple-dark`
                }`
              : color === buttonCollor.purple
              ? `bg-leemon-purple text-leemon-yellow ${
                  small || mini
                    ? "drop-shadow-buttonLight"
                    : "drop-shadow-button"
                } ${
                  !disabled &&
                  `hover:bg-leemon-yellow ${
                    small || mini
                      ? "hover:drop-shadow-buttonDeepLight"
                      : "hover:drop-shadow-buttonDeep"
                  }  hover:text-leemon-purple-dark`
                }`
              : color === buttonCollor.lightGreen
              ? `bg-leemon-green-light3 text-leemon-purple-dark2 ${
                  small || mini
                    ? "drop-shadow-buttonLight"
                    : "drop-shadow-button"
                } ${
                  !disabled &&
                  `hover:bg-leemon-yellow ${
                    small || mini
                      ? "hover:drop-shadow-buttonDeepLight"
                      : "hover:drop-shadow-buttonDeep"
                  }  hover:text-leemon-purple-dark2`
                }`
              : color === buttonCollor.white
              ? `bg-white text-leemon-purple-dark2 ${
                  small || mini
                    ? "drop-shadow-buttonLight"
                    : "drop-shadow-button"
                } ${
                  !disabled &&
                  `hover:bg-leemon-yellow ${
                    small || mini
                      ? "hover:drop-shadow-buttonDeepLight"
                      : "hover:drop-shadow-buttonDeep"
                  }  hover:text-leemon-purple-dark2`
                }`
              : color === buttonCollor.darkPurple
              ? `bg-leemon-purple-dark3 text-white ${
                  small || mini
                    ? "drop-shadow-buttonLight"
                    : "drop-shadow-button"
                } ${
                  !disabled &&
                  `hover:bg-leemon-yellow ${
                    small || mini
                      ? "hover:drop-shadow-buttonDeepLight"
                      : "hover:drop-shadow-buttonDeep"
                  }  hover:text-leemon-purple-dark2`
                }`
              : `bg-leemon-yellow text-leemon-purple drop-shadow-buttonWhite ${
                  !disabled &&
                  "hover:bg-leemon-yellow hover:drop-shadow-buttonDeepWhite hover:text-leemon-purple-dark"
                }`
          }
          ${disabled && "text-leemon-purple-light2"}
      `}
      onClick={action}
    >
      {children}
    </button>
  );
}
