import React from "react";
import { Provider } from "react-redux";

import styles from "./App.module.css";
import Router from "./Pages/Router";
import store from "./Redux/store";
import "./firebase";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
