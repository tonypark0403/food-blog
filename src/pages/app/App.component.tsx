import React from "react";
import { Switch, Route } from "react-router-dom";
import Template from "../template/Template.component";
import Home from "../home/Home.component";
import User from "../user/User.component";
import Write from "../write/Write.component";
import PageNotFound from "../not-found/PageNotFound.component";
import "./App.style.scss";

const App: React.FC = () => {
  return (
    <>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" component={User} />
          <Route path="/write" component={Write} />
          <Route component={PageNotFound} />
        </Switch>
      </Template>
    </>
  );
};

export default App;
