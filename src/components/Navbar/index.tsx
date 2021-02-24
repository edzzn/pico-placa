import * as React from "react";
import * as Styles from "./styles";
import { APP_NAME } from "../../common/texts";

const NavBarComponent: React.FC = () => (
  <Styles.Navbar>{APP_NAME}</Styles.Navbar>
);

export default NavBarComponent;
