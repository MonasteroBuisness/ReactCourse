import logo from './logo.svg';
import './App.css';
import TransactionsRemote from './TransactionsRemote';
import HomePageRemote from './HomePageRemote';
import PageNotFoundRemote from './PageNotFoundRemote';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

export type User = {id : number, name : string};
function App() {  

  const [user, setUser] = useState<User>({id: 1, name : "Matt"})

  const handleLogin = () => {
    if (user.id === 0) {
      setUser({id: 1, name : "Matt"});
    }
    else {
      setUser({id : 0, name : ""})
    }
  }

  return (
    <div><h1>This is the container {user.name}</h1>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/list">Transactions</Link>
      <Link to="/something">404</Link>
      <button onClick={handleLogin}>Login or out</button>
      <Routes>
        <Route path="/list" element = {<TransactionsRemote />} />
        <Route path="/" element = {<HomePageRemote user={user} />} />
        <Route path="*" element = {<PageNotFoundRemote />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
