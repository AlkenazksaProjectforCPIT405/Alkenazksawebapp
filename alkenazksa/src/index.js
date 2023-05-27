import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';
import Navbar from './pages/Navbar.js';
import Userpage from './pages/Userpage';
import ProductPage from './pages/ProductPage';




export default function App(){
  return(
    <Router>
  <Routes>
    <Route  path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='navbar' element={<Navbar />}/>
      <Route path='userpage'  element={<Userpage />}/>
      <Route path='proudectpage' element={<ProductPage/>}/>
      <Route  path='*' element={<NotFound />}/>
      </Route>
  </Routes>
  </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

