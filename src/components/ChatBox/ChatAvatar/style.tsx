import styled from "@emotion/styled";

export const ChatAvatarImage = styled.img`
  width: 48px;
  height: 48px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
`;

ChatAvatarImage.defaultProps = {
  src: "https://placekitten.com/50/50",
};

export const ChatNameDiv = styled.div`
  font-size: 0.75rem;
  color: #999999;
  text-align: center;
`;
