import React, { Component, useState, useEffect } from 'react';
import { Route, NavLink, Routes, HashRouter } from 'react-router-dom';

import { createClient } from 'contentful';

import './index.css';
import './input.css';

import HeroBanner from './HeroBanner';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Project from './Project';

const client = createClient({
  space: 'v07zet58b1mb', // Replace with your Space ID
  accessToken: 'nGuBmc507f3dwztkmQjhGt9JTYEOMnR6WI-Jlk9h254', // Replace with your Access Token
});

// Needed?
/*function updateNavigation(navigationRef, pos, value) {
  const updatedNavigation = navigationRef.map((c, i) => {
    if (i === pos) {
      // Increment the clicked counter
      return { name: value, href: '#' };
    } else {
      // The rest haven't changed
      return c;
    }
  });
}*/

//class App extends Component {
function App() {
  // Track page views
  const [heroBanner, setHeroBanner] = useState('');
  const [service, setService] = useState('');
  const [project, setProject] = useState('');
  const [about, setAbout] = useState('');
  const [contact, setContact] = useState('');

  var initNavigation = [
    { name: 'service_placeholder', href: '#' },
    { name: 'project_placeholder', href: '#' },
    { name: 'about_placeholder', href: '#' },
    { name: 'contact_placeholder', href: '#' },
  ];
  const [navigation, setNavigation] = useState(initNavigation);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        var allItems = response.items;
        //console.log(allItems);
        for (let index = 0; index < allItems.length; index++) {
          const element = allItems[index];
          switch (element.sys.contentType.sys.id) {
            case 'pageLanding':
              setHeroBanner(element.fields);
              break;
            case 'service':
              setService(element.fields);
              /*setNavigation(
                updateNavigation(navigation, 0, element.fields.serviceTitle)
              );*/
              navigation[0] = { name: element.fields.serviceTitle, href: '#' };
              break;
            case 'project':
              navigation[1] = { name: element.fields.projectTitle, href: '#' };
              setProject(element.fields);
              break;
            case 'about':
              navigation[2] = { name: element.fields.aboutTitle, href: '#' };
              setAbout(element.fields);
              break;
            case 'contact':
              navigation[3] = { name: element.fields.contactTitle, href: '#' };
              setContact(element.fields);
              break;
            default:
              break;
          }
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <HeroBanner contentfulFields={heroBanner} navigation={navigation} />
      <Service contentfulFields={service} />
      <Project contentfulFields={project} />
      <About contentfulFields={about} />
      <Contact contentfulFields={contact} />
    </div>
    // <HashRouter>
    //   <div className='App'>
    //     <h1>Framtíðni - test</h1>
    //     <ul className='header'>
    //       <li>
    //         <NavLink to='/'>Heim</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/about'>Um okkur</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/contact'>Hafðu samband</NavLink>
    //       </li>
    //     </ul>
    //     <div className='content'>
    //       <Routes>
    //         <Route exact path='/' element={<Home />}></Route>
    //         <Route exact path='/about' element={<About />}></Route>
    //         <Route exact path='/contact' element={<Contact />}></Route>
    //       </Routes>
    //     </div>
    //   </div>
    // </HashRouter>
  );
}
//}
export default App;
