import React from "react";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApplicationProvider } from "./services/Application";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => (
  <Provider store={store}>
    <ApplicationProvider>
      <ThemeProvider theme={darkTheme}>
        <Dashboard />
      </ThemeProvider>
    </ApplicationProvider>
  </Provider>
);

export default App;
