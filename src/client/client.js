import 'babel-polyfill';
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import Routes from './Routes';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "./reducers";

const store = createStore(reducers,{},applyMiddleware(thunk))

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
   ,document.getElementById("root")
   )
;
