import styled from "@emotion/styled";

export const StyledDiv = styled.div`
  padding: 1rem;
`;

export const Button = styled.button<{ enabled: boolean }>`
  background: #17a2b8;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #17a2b8;
  border-radius: 3px;
  pointer-events: ${(props) => (props.enabled ? "unset" : "none")};
  cursor: ${(props) => (props.enabled ? "pointer" : "not-allowed")};
`;

export const ErrorSpan = styled.div`
  color: red;
`;
