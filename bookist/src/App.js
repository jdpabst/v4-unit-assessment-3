import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar filterBooks='' reset=''/>
    </div>
  );
}

export default App;
