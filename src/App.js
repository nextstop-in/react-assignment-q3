import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import SignIn from "./component/SignIn";
import ShopPage from "./component/ShopPage";
import UserData from "./component/UserData";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserData} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
