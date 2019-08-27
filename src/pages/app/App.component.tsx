import React from "react";
import { Switch, Route } from "react-router-dom";
import Template from "../template/template.component";
import Home from "../home/Home.component";
import PageNotFound from "../not-found/PageNotFound.component";
import "./App.style.scss";

const App: React.FC = () => {
  return (
    <>
      <Template>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Template>
    </>
  );
};

export default App;
