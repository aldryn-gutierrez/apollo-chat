import { GetStaticPropsResult } from "next";
import { Params } from "next/dist/server/router";
import React, { ReactElement } from "react";
import ChannelSelection from "../components/Channels/ChannelSelection";
import ChatBox from "../components/ChatBox/ChatBox";
import ChatBoxTitle from "../components/ChatBox/ChatBoxTitle";
import UserSelection from "../components/Users/UserSelection";
import ClientOnly from "../components/ClientOnly";

export const HomePage = (): ReactElement => {
  return (
    <div className={""} style={{ fontFamily: "Helvetica" }}>
      <main style={{ margin: "10px 50px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h1>1 day chat App</h1>
          <span>All messages will be deleted at every 00:00 UTC</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 9fr",
            height: "800px",
          }}
        >
          <div
            style={{ background: "#f4f5fb", borderRight: "1px solid #e6ecf3" }}
          >
            <UserSelection />
            <ChannelSelection />
          </div>
          <div
            style={{
              background: "#f4f5fb",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ChatBoxTitle />
            <ClientOnly>
              <ChatBox />
            </ClientOnly>
          </div>
        </div>
      </main>
    </div>
  );
};

export function getStaticProps(): GetStaticPropsResult<Params> {
  return {
    props: {},
  };
}

export default HomePage;
