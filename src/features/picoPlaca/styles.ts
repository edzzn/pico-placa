import styled from "styled-components";
import { COLOR_PALETTE } from "../../common/colors";

export const PageContainer = styled.div`
  max-width: 60%;
  width: 1020px;
  margin-inline: auto;
`;

export const PicoPlacaContainer = styled.div`
  width: 100%;
  height: 500px;
  background: ${COLOR_PALETTE.WHITE_BACKGROUND};
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column;
  align-items: center;
`;
