import logo from './logo.svg';
import './App.css';
import TransactionsRemote from './TransactionsRemote';
import HomePageRemote from './HomePageRemote';
import PageNotFoundRemote from './PageNotFoundRemote';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {  
  return (
    <div><h1>This is the container</h1>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/list">Transactions</Link>
      <Link to="/something">404</Link>
      <Routes>
        <Route path="/list" element = {<TransactionsRemote />} />
        <Route path="/" element = {<HomePageRemote />} />
        <Route path="*" element = {<PageNotFoundRemote />} />
      </Routes>
    
    
      </BrowserRouter>
    </div>
  );
}

export default App;
