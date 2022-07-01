import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import PodcastHome from './components/routes/podcasthome/PodcastHome.js';
import Login from './components/login/Login.js';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/login" element = {<Login />} />
      <Route path = "/" element = {<App/>} />
      <Route path = "/podcasthome" element = {<PodcastHome/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

