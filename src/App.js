import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { DarkModeProvider } from './DarkMode';
import Navbar from './components/Navbar';
import About from './components/About';
import Topics from './components/Topics/Topics';
import Home from './components/Home';

import PeopleDetail from './components/Topics/People/PeopleDetail';
import People from './components/Topics/People/People';
import Movies from './components/Topics/Movies/Movies';
import MovieDetail from './components/Topics/Movies/MovieDetail';
import Locations from './components/Topics/Locations/Locations';
import LocationDetail from './components/Topics/Locations/LocationDetail';
import Species from './components/Topics/Species/Species';
import SpecieDetail from './components/Topics/Species/SpecieDetail';
import Vehicles from './components/Topics/Vehicles/Vehicles';
import VehicleDetail from './components/Topics/Vehicles/VehicleDetail';

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // Setting the dark mode in the local Storage
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  //Getting the initial mode from the browser
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  return (
    <DarkModeProvider value={darkMode}>
      <div className={darkMode ? 'dark-mode' : 'ligt-mode'}>
        <Navbar setDarkMode={setDarkMode} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/topics" exact component={Topics} />
          <Route path="/people/:id" component={PeopleDetail} />
          <Route path="/people" component={People} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/locations/:id" component={LocationDetail} />
          <Route path="/locations" exact component={Locations} />
          <Route path="/species" exact component={Species} />
          <Route path="/species/:id" component={SpecieDetail} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/vehicles/:id" component={VehicleDetail} />
          <Route exact to="/" component={Home} />
        </Switch>
      </div>
    </DarkModeProvider>
  );
}

export default App;
