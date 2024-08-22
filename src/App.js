import React, { useRef, Component, useState, useEffect } from 'react';
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

//class App extends Component {
function App() {
  // Track page views
  const [heroBanner, setHeroBanner] = useState('');
  const [service, setService] = useState('');
  const [project, setProject] = useState('');
  const [about, setAbout] = useState('');
  const [contact, setContact] = useState('');

  var initNavigation = [
    { id: 'service', name: 'service_placeholder', href: '#' },
    { id: 'project', name: 'project_placeholder', href: '#' },
    { id: 'about', name: 'about_placeholder', href: '#' },
    { id: 'contact', name: 'contact_placeholder', href: '#' },
  ];
  const [navigation, setNavigation] = useState(initNavigation);

  const serviceRef = useRef();
  const projectRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

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
              navigation[0] = {
                id: 'service',
                name: element.fields.serviceTitle,
                ref: serviceRef,
              };
              break;
            case 'project':
              navigation[1] = {
                id: 'project',
                name: element.fields.projectTitle,
                ref: projectRef,
              };
              setProject(element.fields);
              break;
            case 'about':
              navigation[2] = {
                id: 'about',
                name: element.fields.aboutTitle,
                ref: aboutRef,
              };
              setAbout(element.fields);
              break;
            case 'contact':
              navigation[3] = {
                id: 'contact',
                name: element.fields.contactTitle,
                ref: contactRef,
              };
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
      <Service contentfulFields={service} customRef={serviceRef} />
      <Project contentfulFields={project} customRef={projectRef} />
      <About contentfulFields={about} customRef={aboutRef} />
      <Contact contentfulFields={contact} customRef={contactRef} />
    </div>
  );
}
export default App;
