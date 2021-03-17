import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="navbar is-info">
      <div className="navbar-brand">
        <NavLink
          className="navbar-item is-uppercase has-text-weight-bold is-size-2-desktop"
          to="/"
        >
          Gallery
        </NavLink>
      </div>
    </nav>
  );
};

export default MainNav;
