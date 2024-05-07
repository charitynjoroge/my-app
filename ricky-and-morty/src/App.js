import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Collection from './components/collection';
import List from './components/list';
import Search from './components/search';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/'  element={<Collection/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
