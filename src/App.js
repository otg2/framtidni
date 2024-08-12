import React, { Component, useEffect } from 'react';
import {
  Route,
  NavLink,
  Routes,
  HashRouter,
  useLocation,
} from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './Home';
import About from './About';
import Contact from './Contact';

const TRACKING_ID = 'G-D2Y2R1104T'; // Your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

const UsePageViews = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

class App extends Component {
  //const App = () => {
  // Track page views
  render() {
    return (
      <HashRouter>
        <UsePageViews />
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
