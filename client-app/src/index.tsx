import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./app/layout/ScrollToTop";
import "semantic-ui-css/semantic.min.css";
import { createBrowserHistory } from "history";
import "react-widgets/dist/css/react-widgets.css";
import dateFnsLocalizer from "react-widgets-date-fns";

dateFnsLocalizer();

export const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
