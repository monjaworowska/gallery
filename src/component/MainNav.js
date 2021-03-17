import MenuItem from "./MenuItem";

const MainNav = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <MenuItem url="/gallery" text="Gallery" size="is-size-2-desktop" />
      </div>
    </nav>
  );
};

export default MainNav;
