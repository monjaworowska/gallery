import { BrowserRouter, Switch, NavLink } from "react-router-dom";

import MainNav from "./component/MainNav";
import List from "./component/List";

const photo = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
};

const album = {
  userId: 1,
  id: 1,
  title: "quidem molestiae enim",
};

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

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
            <List url="http://jsonplaceholder.typicode.com/albums/1/photos" />
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
