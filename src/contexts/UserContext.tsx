import { createContext, useContext } from "react";

export enum UserType {
  Joyse = "Joyse",
  Sam = "Sam",
  Russell = "Russell",
}

export const UserContextInitialState = "";

export type UserContextType = {
  user: string;
  setUser: (user: string) => void;
};

export const UserContext = createContext<UserContextType>({
  user: UserContextInitialState,
  setUser: () => console.warn("no filters provider"),
});

export const usePaginators = (): UserContextType =>
  useContext(UserContext);
