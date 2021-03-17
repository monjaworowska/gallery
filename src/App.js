import { BrowserRouter, Switch, NavLink } from "react-router-dom";

import MainNav from "./component/MainNav";
import Nav from "./component/Nav";

const App = () => (
  <BrowserRouter>
    <MainNav />
    <div className="container mt-2">
      <div className="tile is-ancestor">
        <div className="tile is-3 is-vertical is-parent">
          <NavLink to="/users" className="tile is-child box">
            <p className="title">Users</p>
          </NavLink>
          <NavLink to="albumns" className="tile is-child box">
            <p className="title">Albums</p>
          </NavLink>
        </div>
        <div className="tile is-parent">
          <NavLink to="/" className="tile is-child box">
            <p className="title">Photo</p>
          </NavLink>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">Random Album</p>
            <button className="button is-light">More...</button>
          </div>
        </div>
      </div>
      <Switch></Switch>
    </div>
  </BrowserRouter>
);

export default App;
