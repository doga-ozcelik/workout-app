import React, { createContext, useState } from "react";

interface UserData {
  weight?: number;
  height?: number;
  ratio?: number;
  selectedWeekdays?: string[];
  goal?: string;
}

interface UserDataContextProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserDataContext = createContext<UserDataContextProps>({
  userData: {},
  setUserData: () => {},
});

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>({});

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
