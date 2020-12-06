import React from 'react';
import WelcomeBanner from './WelcomeBanner';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ResetPasswordForm from './ResetPasswordForm';
import common from '../config/common';

const WelcomePage = () => {
  return (
    <div className="login-page">
      <main className="login-page__form">
        <img src={common.logoImage} alt="we are W" className="logo"/>
        <Switch>
          <Route exact path="/">
            <RegisterForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/reset-password">
            <ResetPasswordForm />
          </Route>
        </Switch>
      </main>
      <aside className="login-page__marketing">
        <WelcomeBanner />
      </aside>
    </div>
  );
}

export default WelcomePage;
