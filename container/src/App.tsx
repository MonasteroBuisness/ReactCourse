import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import  mount  from 'payments_list/Transactions';

function App() {

  const transactions = useRef<HTMLDivElement>(null);

  useEffect( () => {
    mount(transactions.current);
  }, [])

  return (
    <div><h1>This is the container</h1>
    
      <div ref={transactions}></div>
    </div>
  );
}

export default App;
