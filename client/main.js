import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Routes from '../imports/startup/client/routes'

// import App from '../imports/ui/App.js';

import { BrowserRouter} from 'react-router-dom';


Meteor.startup(() => {
  
  render((
    <Routes/>
  ), document.getElementById('render-target'));
  
});
