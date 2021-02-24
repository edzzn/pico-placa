import styled from "styled-components";
import { COLOR_PALETTE } from "../../common/colors";

export const Footer = styled.footer`
  background: ${COLOR_PALETTE.WHITE_BACKGROUND};
  margin-top: auto;
  padding: 40px 0;
  color: ${COLOR_PALETTE.GREY};
  text-align: center;

  a {
    text-decoration: none;
    color: ${COLOR_PALETTE.GREY};
    text-decoration: underline;
  }
`;
