import { useState, createContext, ReactNode, useEffect } from "react";
import { Token } from "../utils/types";
import { TOKENS } from "../utils/constants";

export const StateContext = createContext({
  isDark: false,
  setIsDark: (value: boolean) => {},

  tokens: [] as Token[],
  setTokens: (value: Token[]) => {},

  showTokenModal: false,
  setShowTokenModal: (value: boolean) => {},

  showSettings: false,
  setShowSettings: (value: boolean) => {},

  showWalletModal: false,
  setShowWalletModal: (value: boolean) => {},
});

type Props = {
  children?: ReactNode;
};

export const StateProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);
  const [tokens, setTokens] = useState(TOKENS);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isDark,
        setIsDark,
        tokens,
        setTokens,
        showTokenModal,
        setShowTokenModal,
        showSettings,
        setShowSettings,
        showWalletModal,
        setShowWalletModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
