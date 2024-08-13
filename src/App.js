import React, { Component, useEffect } from 'react';
import { Route, NavLink, Routes, HashRouter } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {
  //const App = () => {
  // Track page views
  render() {
    //usePageTracking();

    return (
      <HashRouter>
        {/* <UsePageViews /> */}
        <div className='App'>
          <h1>Framtíðni - test</h1>
          <ul className='header'>
            <li>
              <NavLink to='/'>Heim</NavLink>
            </li>
            <li>
              <NavLink to='/about'>Um okkur</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Hafðu samband</NavLink>
            </li>
          </ul>
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/contact' element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
