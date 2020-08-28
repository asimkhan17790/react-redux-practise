import React from 'react';
import Home from './components/Home';
import StarMatchGame from './components/StarMatchGame';
import Contact from './components/Contact';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
      <main>
      <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} exact />
                <Route path="/starMatch" component={StarMatchGame} />
                <Route path="/contact" component={Contact} />
                <Route path="/profile" render={()=> <Profile title='Github Cards App!!'/>} />
                <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
