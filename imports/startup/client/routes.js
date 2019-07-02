import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.js'
//pages
import NotFound from '../../ui/pages/NotFound.js'

export const renderRoutes = () => (
    <Router>
      <div>
        <Route exact={true} path="/" component={AppContainer}/>
      </div>
    </Router>
  );