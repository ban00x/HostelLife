import React from "react";
import EventProfilePage from "./Components/EventProfilePage";
import EventsPage from "./Components/EventsPage";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Hostel Life</h1>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/events" component={EventsPage} /> */}
          <Route path="/events/:category" component={EventsPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
