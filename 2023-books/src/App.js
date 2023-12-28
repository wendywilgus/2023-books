import * as React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Bookshelf from './components/Bookshelf';
import FullList from './components/Fulllist';


function App() {
  return (
    <div className='App'>
     <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/bookshelf' exact Component={Bookshelf}></Route>
          <Route path='/favorites' exact Component={Favorites}></Route>
          <Route path='/full-list' exact Component={FullList}></Route>
        </Routes>
    </Router>
      
    </div>
  );
}

export default App;
