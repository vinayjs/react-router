import './App.css';
import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import {Home, About, Contact} from "./component"


function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;
