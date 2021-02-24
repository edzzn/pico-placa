import * as React from "react";
import * as Styles from "./styles";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <Styles.Footer>
    <Link to="/">home</Link> | <Link to="/about">about</Link>
  </Styles.Footer>
);

export default Footer;
