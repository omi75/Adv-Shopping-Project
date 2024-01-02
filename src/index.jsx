import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux'
import "./index.css";
import { store } from "./redux/Store";
import {BrowserRouter} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import AppContextProvider from "./Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( 
  <BrowserRouter>
    <Provider store={store}>
      <AppContextProvider>
          <App />   
          <Toaster/>
      </AppContextProvider>
    </Provider>
  </BrowserRouter>
);
