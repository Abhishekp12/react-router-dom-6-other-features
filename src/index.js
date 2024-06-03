import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{router}from'./routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
} from "react-router-dom";
import App from'./App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> when u use routes.js file & not use App.js 
    As in very latest version of react router dom 6  use routes js 
     otherwise updates react dom app.js  is good*/}
 <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
