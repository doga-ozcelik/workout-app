import React, { createContext, useState, ReactNode } from "react";

type Direction = "next" | "back";

interface NavigationContextProps {
  direction: Direction;
  setDirection: (dir: Direction) => void;
}

export const NavigationContext = createContext<NavigationContextProps>({
  direction: "next",
  setDirection: () => {},
});

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [direction, setDirection] = useState<Direction>("next");

  return (
    <NavigationContext.Provider value={{ direction, setDirection }}>
      {children}
    </NavigationContext.Provider>
  );
};
