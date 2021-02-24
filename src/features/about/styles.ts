import styled from "styled-components";
import { COLOR_PALETTE } from "../../common/colors";

export const PageContainer = styled.div`
  max-width: 90%;
  width: 1020px;
  margin: 30px auto;
`;

export const AboutContainer = styled.div`
  width: 100%;
  height: 700px;
  background: ${COLOR_PALETTE.WHITE_BACKGROUND};
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column;
  padding: 32px;
  font-size: 16px;

  h1 {
    color: ${COLOR_PALETTE.GREEN};
  }

  ul {
    padding-left: 50px;
  }

  a {
    color: ${COLOR_PALETTE.GREEN};
    font-size: 18px;
    text-decoration: none;
  }
`;

export const SpotifyPlayerContainer = styled.div`
  padding: 15px;
`;
