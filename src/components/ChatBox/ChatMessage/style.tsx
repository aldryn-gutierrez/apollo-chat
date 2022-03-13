import styled from "@emotion/styled";

export const StyledDiv = styled.div<{ isSender: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => (props.isSender ? "row-reverse" : "row")};
  margin-bottom: 40px;
`;

export const ChatTextDiv = styled.div<{ isSender: boolean }>`
  padding: 0.4rem 1rem;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background: #ffffff;
  font-weight: 300;
  line-height: 150%;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 10px;
    border: 10px solid;
    ${({ isSender }) =>
      isSender
        ? `
  right: -20px;
  border-color: transparent transparent transparent #ffffff;
`
        : `
  left: -20px;	
  border-color: transparent #ffffff transparent transparent;
`}
  }
  ${({ isSender }) =>
    isSender
      ? `
left: -20px;
border-color: transparent transparent transparent #ffffff;
right: inherit;
`
      : `
right: -20px;
border-color: transparent #ffffff transparent transparent;
left: inherit;
`}
`;

export const ChatHourDiv = styled.div<{ isSender: boolean }>`
  justify-content: flex-end;
  padding: 0;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ isSender }) =>
    isSender
      ? `
  margin-right: 30px;
`
      : `
  margin-left: 30px;
`}
`;

export const ChatMessageStatusDiv = styled.div`
  font-size: 0.75rem;
  color: #999999;
  text-align: center;
  margin-left: 10px;
`;
