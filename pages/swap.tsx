import Image from "next/image";
import { useContext, useState } from "react";
import OperationsBox from "../components/operationsBox";
import ToggleChart from "../components/toggleChart";
import TokenModal from "../components/tokenModal";
import { StateContext } from "../context/stateContext";

export default function Swap() {
  const { isDark, tokens, showTokenModal, setShowTokenModal } =
    useContext(StateContext);
  const [expertMode, setExpertMode] = useState(false);
  const tokenFrom = tokens[0];
  const tokenTo = tokens[2];
  return (
    <div
      className={`
        flex flex-col w-full h-full 
        bg-leemon-gray-light4 dark:bg-leemon-purple-dark4
        pt-[150px] sm:pt-[200px] relative 
        lg:pb-[80px]
        ${
          expertMode
            ? "pb-[100px]"
            : "pb-[40px] sm:pb-[60px] bg-swap-cloud dark:bg-swap-cloud-dark"
        }
        bg-no-repeat bg-[center_top_260px]
      `}
    >
      <div
        className={`
          flex-col xl:flex-row 
          flex relative 
          px-2
          w-full
          sm:items-center xl:items-start
          justify-center
          ${
            expertMode &&
            "gap-[70px] 2xl:gap-[100px] sm:px-[100px] xl:px-0 xl:pl-[200px] xl:pr-20 "
          } 
        `}
        // xl:max-w-[1687px]
      >
        <OperationsBox
          from={tokenFrom}
          to={tokenTo}
          expertMode={expertMode}
          setExpertMode={() => setExpertMode(!expertMode)}
        />
        {expertMode && <ToggleChart />}
      </div>

      <TokenModal
        title="Select a token"
        isOpen={showTokenModal}
        clickAction={() => {}}
        closeAction={() => setShowTokenModal(false)}
      />
    </div>
  );
}
