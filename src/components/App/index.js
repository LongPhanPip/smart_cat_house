import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import PasswordConfirmPage from '../PasswordConfirm';
import HomePage from '../Home';
import AccountPage from '../Account';
import InfoPage from '../Info';
import Footer from '../Footer';
import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../Session';

class App extends Component {
  render() {
    return (
        <Router>
          <Navigation/>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.PASSWORD_CONFIRM + '/:id'} component={PasswordConfirmPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.INFO} component={InfoPage} />
          <Footer />
        </Router>
    );
  }
}


export default withAuthentication(App);
