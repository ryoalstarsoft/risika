import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import HomePage from './HomePage';
import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import NewEventPage from './events/NewEventPage';
import requireAuth from '../utils/requireAuth';
import { Route, Switch } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        <Switch>
          <Route exact path="/" component={requireAuth(HomePage)} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/new-event" component={requireAuth(NewEventPage)} />
        </Switch>
      </div>
    );
  }
}

export default App;