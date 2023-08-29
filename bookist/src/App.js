import { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';
import data from './data.js';
import './App.css';


function App() {
  const [ books, setBooks ] = useState(data);
  const [ shelf, setShelf ] = useState([]);

  const filterBooks = (userSearch) => {
    console.log(`This is the userSearch on App.js: ${userSearch}`)
    let filteredBooks = data.filter(item => {
      let title = item.title.toLowerCase();
      return title.includes(userSearch.toLowercase)
    })
    setBooks(filteredBooks);
  }

  const reset = () => {
    console.log('Reset function firing in App.js')
    setBooks(data);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar filterBooks= { filterBooks } reset={ reset }/>
      <BookList books={ books }/>
    </div>
  );
}

export default App;
