import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div >
      <h1>This is the static pages site</h1>
      <HomePage />
      <PageNotFound />
    </div>
  );
}

export default App;
