import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { configStore} from './store/configStore';
import ScrollToTop from "./common/ScrollToTop";
import ReduxToastr  from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { fetchEvent } from './feature/event/eventAction';
const roolEl = document.getElementById("root");
const store = configStore();
store.dispatch(fetchEvent());
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop>
        <ReduxToastr 
        position="bottom-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        />
      <App />
      </ScrollToTop>
        
      </BrowserRouter>
    </Provider>,
    roolEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
