import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import About from "./features/about";
import PicoPlaca from "./features/picoPlaca";
import { AppContainer } from "./styles";

const history = createBrowserHistory();

function App() {
  return (
    <AppContainer>
      <Router history={history}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={PicoPlaca} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
