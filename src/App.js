import { BrowserRouter, Switch } from "react-router-dom";

import MainNav from "./component/MainNav";
import Nav from "./component/Nav";

const App = () => (
  <BrowserRouter>
    <MainNav />
    <Nav />
    <div className="container">
      <Switch></Switch>
    </div>
  </BrowserRouter>
);

export default App;
