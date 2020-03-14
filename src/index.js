//import Form from "./js/components/Form";

import React from "react";
import ReactDOM from "react-dom";
//import { createStore } from "redux";
//import { Provider } from "react-redux";
// rootReducer from "./Redux/reducers/reducer";
import { loadState, saveState } from "./localStorage";
// /import throttle from "lodash/throttle";
import App from "./app";
//import * as serviceWorker from "./serviceWorker";

const persistedState = loadState();

/*const store = createStore(
  rootReducer,
  //persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1500)
);*/

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
