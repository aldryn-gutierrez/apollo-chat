import { GetStaticPropsResult } from "next";
import { Params } from "next/dist/server/router";
import React, { ReactElement, useState } from "react";
import { UserContext, UserType } from "../contexts/UserContext";
import { ChannelContext, ChannelType } from "../contexts/ChannelContext";
import ChatContainer from "../components/ChatBox/ChatContainer.tsx";
import ChatHeader from "../components/ChatBox/ChatHeader";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  margin: 10px 50px;
  font-family: "Helvetica";
`;

export const HomePage = (): ReactElement => {
  const [user, setUser] = useState(UserType.Joyse);
  const [channel, setChannel] = useState(ChannelType.General);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ChannelContext.Provider value={{ channel, setChannel }}>
        <StyledMain>
          <ChatHeader />
          <ChatContainer />
        </StyledMain>
      </ChannelContext.Provider>
    </UserContext.Provider>
  );
};

export function getStaticProps(): GetStaticPropsResult<Params> {
  return {
    props: {},
  };
}

export default HomePage;
