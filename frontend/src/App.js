import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductTips from './components/ProductTips';
import EmergencyGuide from './components/EmergencyGuide';
import ActivityPlanner from './components/ActivityPlanner';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product-tips" component={ProductTips} />
          <Route path="/emergency-guide" component={EmergencyGuide} />
          <Route path="/activity-planner" component={ActivityPlanner} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
