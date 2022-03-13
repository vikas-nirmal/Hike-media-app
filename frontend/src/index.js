import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import store from './Store'
import {Provider as AlertProvider, positions, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic"


const options = {
  positions: positions.BOTTOM_CENTER,
  timeout: 3000,
  transitions: transitions.SCALE,
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options} >
    <App />
    </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
