import React from "react";

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function Home() {
  let match = useRouteMatch();

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/home">Home page</Link>
          <Link to="/help">Help</Link>
        </nav>

        <Switch>
          <Route path={match.url}>
            <section>
              <h1> Hello , user</h1>
            </section>
          </Route>
          <Route path="/help">
            <section>
              <h1>Help</h1>
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
