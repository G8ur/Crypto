import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './app/store'
import 'antd/dist/antd'


ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>

</BrowserRouter>
, document.getElementById("root"));