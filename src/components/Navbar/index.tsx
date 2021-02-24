import * as React from "react";
import * as Styles from "./styles";
import { APP_NAME } from "../../common/texts";
import { Link } from "react-router-dom";

const NavBarComponent: React.FC = () => (
  <Styles.Navbar>
    <Link to="/">{APP_NAME}</Link>
  </Styles.Navbar>
);

export default NavBarComponent;
