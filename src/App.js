import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homePage';

export default function App() {
  return (
    <Router>
      <Route exact={true} path="/">
        <HomePage/>
      </Route>
    </Router>
  )
}
