import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import NavBarComponent from "./components/Navbar";
import About from "./features/about";
import PicoPlaca from "./features/picoPlaca";
import { AppContainer, AppContent } from "./styles";

const history = createBrowserHistory();

function App() {
  return (
    <AppContainer>
      <NavBarComponent />
      <AppContent>
        <Router history={history}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={PicoPlaca} />
          </Switch>
        </Router>
      </AppContent>
    </AppContainer>
  );
}

export default App;
