import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {Provider} from "react-redux"
import store from "./redux/store"
import './index.css';
import Header from "./component/Header/Header"
import CurrentEmployee from "./pages/CurrentEmployee/CurrentEmployee"
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>

    <Header />
    <Routes>
    <Route path="/" element={<CurrentEmployee/>} />
    <Route path="/CreateEmployee" element={<CreateEmployee/>} />
    </Routes>

  </BrowserRouter>
</Provider>
);


