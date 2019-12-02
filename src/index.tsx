import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./containers/App";
import store from "./store";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { defaultTheme } from "./theme/material";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={defaultTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
