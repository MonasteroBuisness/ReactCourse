import logo from './logo.svg';
import './App.css';
import TransactionsRemote from './TransactionsRemote';
import HomePageRemote from './HomePageRemote';
import PageNotFoundRemote from './PageNotFoundRemote';

function App() {  
  return (
    <div><h1>This is the container</h1>
    
      <TransactionsRemote />
      <HomePageRemote />
      <PageNotFoundRemote />
    </div>
  );
}

export default App;
