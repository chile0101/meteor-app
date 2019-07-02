import { withTracker } from 'meteor/react-meteor-data'
import App from './App';

const AppContainer = withTracker(({ id }) => {

  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(App);

export default AppContainer;