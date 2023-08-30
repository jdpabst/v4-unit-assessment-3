import { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf'
import data from './data.js';
import './App.css';


function App() {
  const [ books, setBooks ] = useState(data);
  const [ shelf, setShelf ] = useState([]);

  const filterBooks = (userSearch) => {
    console.log(`This is the userSearch on App.js: ${userSearch}`)
    let filteredBooks = books.filter(item => {
      let title = item.title.toLowerCase();
      return title.includes(userSearch.toLowerCase())
    })
    setBooks(filteredBooks);
  }

  const reset = () => {
    console.log('Reset function firing in App.js')
    setBooks(data);
  }

  const addToShelf = (book) => {
    let updatedShelf = [...shelf, book]
    setShelf(updatedShelf)
    console.log(shelf);
  }

  const clearShelf = () => {
    setShelf([])
  }

  return (
    <div className="App">
      <Header />
      <SearchBar filterBooks= { filterBooks } reset={ reset }/>
      <BookList books={ books } addToShelf={ addToShelf }/>
      <Shelf shelf={ shelf } clearShelf= { clearShelf } />
    </div>
  );
}

export default App;
