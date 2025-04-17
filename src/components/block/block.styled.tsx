import styled from "@emotion/styled";
import { borderRadius } from "../../theme/border";
import { colors } from "../../theme/colors";

const BlockStyled = styled.div`
  width: 75%;
  padding: 20px;
  background: ${colors.white};
  box-sizing: border-box;
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.25);
  justify-self: center;
  align-self: center;
  border-radius: ${borderRadius.small};
  p {
    font-family: sans-serif;
  }
`;

export { BlockStyled };
