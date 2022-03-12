import { createContext, useContext } from "react";

export enum UserType {
  Joyse = "Joyse",
  Sam = "Sam",
  Russell = "Russell",
}

export const UserContextInitialState = "" as UserType;

export type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

export const UserContext = createContext<UserContextType>({
  user: UserContextInitialState,
  setUser: () => console.warn("no filters provider"),
});

export const useUser = (): UserContextType => useContext(UserContext);
