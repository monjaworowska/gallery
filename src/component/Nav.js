import { useState } from "react";
import cx from "classnames";
import MenuItem from "./MenuItem";

const Nav = () => {
  const [isActive, toggleIsActive] = useState(0);
  return (
    <nav className="navbar is-light mb-3">
      <div className="navbar-brand">
        <MenuItem url="/" text="Gallery" size="is-size-2-desktop"></MenuItem>
        <div
          className={cx("navbar-burger", isActive ? "is-active" : null)}
          onClick={() => toggleIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={cx("navbar-menu", isActive ? "is-active" : null)}
        onClick={() => toggleIsActive(!isActive)}
      >
        <MenuItem url="/users" text="Users" size="is-size-3-desktop"></MenuItem>
        <MenuItem
          url="/albums"
          text="Albumns"
          size="is-size-3-desktop"
        ></MenuItem>
      </div>
    </nav>
  );
};

export default Nav;
