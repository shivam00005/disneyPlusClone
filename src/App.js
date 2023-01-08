import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Originals from './components/Originals';
import Movies from './components/Movies'
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path='/original' element={<Originals />} />
          {/* <Route path='/wishlist' element={<Wishlist />} /> */}
          {/* <Route path='/search' element={<Wishlist />} /> */}
          {/* <Route path='/series' element={<Series />} /> */}
          <Route path='/movies' element={<Movies />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
