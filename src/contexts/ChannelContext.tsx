import { createContext, useContext } from "react";

export enum ChannelType {
  General = "General",
  Technology = "Technology",
  LGTM = "LGTM",
}

export const ChannelContextInitialState = "";

export type ChannelContextType = {
  channel: string;
  setChannel: (channel: string) => void;
};

export const ChannelContext = createContext<ChannelContextType>({
  channel: ChannelContextInitialState,
  setChannel: () => console.warn("no filters provider"),
});

export const usePaginators = (): ChannelContextType =>
  useContext(ChannelContext);
