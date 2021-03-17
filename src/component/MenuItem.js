import { NavLink } from "react-router-dom";
import cx from "classnames";

const MenuItem = ({ url, size, text }) => (
  <NavLink
    className={cx("navbar-item is-uppercase has-text-weight-bold", size)}
    to={url}
  >
    {text}
  </NavLink>
);

export default MenuItem;
