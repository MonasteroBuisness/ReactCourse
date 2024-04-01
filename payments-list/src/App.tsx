import React from 'react';
import logo from './logo.svg';
import './App.css';
import Transactions from './Transactions';

function App() {
  return (
    <div><h1>This is the payments list micro app</h1>
      <Transactions serverUrl='http://somewhere.com'/>
    </div>
  );
}

export default App;
