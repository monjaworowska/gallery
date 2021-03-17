import { BrowserRouter, Switch, NavLink } from "react-router-dom";

import MainNav from "./component/MainNav";
import List from "./component/List";

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
          <div className="tile is-child box">
            <p className="title">Random Album</p>
            <button className="button is-light">More...</button>
          </div>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">Random Album</p>
            <List
              url="http://jsonplaceholder.typicode.com/albums/1/photos"
              type="photos"
            />
            <button className="button is-light">More...</button>
          </div>
        </div>
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
