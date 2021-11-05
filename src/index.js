import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';


import './fonts/Brice-Bold.otf';
import './fonts/Brice-SemiBold.otf';
import './fonts/Brice-Regular.otf'
import './fonts/ApocLCTrial-LightSans.otf'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    <ToastContainer />

    </AuthProvider>
   
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
