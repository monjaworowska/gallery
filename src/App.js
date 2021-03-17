import { BrowserRouter, Switch } from "react-router-dom";

import MainNav from "./component/MainNav";

const App = () => (
  <BrowserRouter>
    <MainNav />
    <div className="container">
      <Switch></Switch>
    </div>
  </BrowserRouter>
);

export default App;
