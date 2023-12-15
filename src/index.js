import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LoginInfo from './components/login';
import UserList from './components/user';
import UserRegistration from './components/Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='/login' element={<LoginInfo></LoginInfo>}></Route>
      <Route path='/user' element={<UserList></UserList>}></Route>
      <Route path='/registration' element={<UserRegistration></UserRegistration>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
