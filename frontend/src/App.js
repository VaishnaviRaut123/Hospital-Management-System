
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import PatientManagement from './components/PatientManagement';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/patients" component={PatientManagement} />
        {/* Add more routes for other sections */}
      </Switch>
    </Router>
  );
};

export default App;

