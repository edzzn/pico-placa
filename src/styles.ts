import styled from "styled-components";
import { COLOR_PALETTE } from "./common/colors";

export const AppContainer = styled.div`
  font-family: "Lato", sans-serif;
  background-color: ${COLOR_PALETTE.WHITE_BACKGROUND};
`;

export const AppContent = styled.div`
  display: flex;
  padding-top: 100px;
  height: 100vh;
  flex: 1;
  flex-direction: column;
`;
