import { createContext, useContext } from "react";

export enum ChannelType {
  General = "General",
  Technology = "Technology",
  LGTM = "LGTM",
}

export const ChannelContextInitialState = "" as ChannelType;

export type ChannelContextType = {
  channel: ChannelType;
  setChannel: (channel: ChannelType) => void;
};

export const ChannelContext = createContext<ChannelContextType>({
  channel: ChannelContextInitialState,
  setChannel: () => console.warn("no filters provider"),
});

export const useChannel = (): ChannelContextType => useContext(ChannelContext);
