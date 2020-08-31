import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import Navbar from './components/NavBar'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import User from './components/User'

export default function App() {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/:username" children={<MatchPost />} />
        <Route component={NotFoundPage} />
      </Switch >
    </div >
  );
}

function MatchPost() {
  const { state } = useLocation();

  if (state) {
    return <User data={state} />
  }
  return <NotFoundPage />
}
