"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface HeaderProviderInterface {
  openSearch: boolean;
  toggleSearch: (val: boolean) => void;
  openMenu: boolean;
  toggleMenu: (val: boolean) => void;
}

const HeaderContext = createContext<HeaderProviderInterface | null>(null);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [openSearch, toggleSearch] = useState(false);
  const [openMenu, toggleMenu] = useState(false);

  return (
    <>
      <HeaderContext.Provider
        value={{ openSearch, openMenu, toggleMenu, toggleSearch }}
      >
        {children}
      </HeaderContext.Provider>
    </>
  );
}

export const useHeader = () => {
  const ctx = useContext(HeaderContext);
  if (!ctx) throw new Error("useHeaderStore must be used inside HeaderStore");
  return ctx;
};
