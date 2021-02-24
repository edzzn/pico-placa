import styled from "styled-components";
import { COLOR_PALETTE } from "../../common/colors";

export const Navbar = styled.nav`
  z-index: 99999;
  width: 100%;
  height: 60px;
  background: ${COLOR_PALETTE.WHITE_BACKGROUND};
  position: fixed;
  top: 0;
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.3em;

  a {
    text-decoration: none;
    color: ${COLOR_PALETTE.GREEN};
  }
`;
