import { useContext } from "react";
import TokenInput from "../components/tokenInput";
import OperationsBox from "../components/operationsBox";
import { StateContext } from "../context/stateContext";
import Accordion from "../components/accordion";

export default function Components() {
  const { tokens, isDark } = useContext(StateContext);
  const tokenFrom = tokens[0];
  const tokenTo = tokens[2];
  return (
    <div className="flex flex-col w-full gap-10 py-10">
      <div className="w-full h-screen">asdfasd</div>
    </div>
  );
}
