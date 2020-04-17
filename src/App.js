import React, { useState, useEffect } from 'react';
import Form from './Form';
import Navbar from './components/Navbar';

/* import icon from './images/films-images/central-image-darkmode.png'; */
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Topics from './components/Topics/Topics';
import Home from './components/Home';
import PeopleDetail from './components/Topics/People/PeopleDetail';
import People from './components/Topics/People/People';
import Movies from './components/Topics/Movies/Movies';
import MovieDetail from './components/Topics/Movies/MovieDetail';

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // Setting the dark mode in the local Storage
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  //Getting the initial mode from the browser
  function getInitialMode() {
    const savedMode = JSON.parse(
      localStorage.getItem(localStorage.getItem('dark'))
    );
    return savedMode || false;
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'ligt-mode'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/topics" exact component={Topics} />

        <Route path="/people/:id" component={PeopleDetail} />
        <Route path="/people" component={People} />

        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/movies" exact component={Movies} />

        <Route exact to="/" component={Home} />

        <main className="main-container">{/*<Form />*/}</main>
      </Switch>
    </div>
  );
}

export default App;
