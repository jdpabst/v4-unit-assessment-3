import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [ userInput, setUserInput ] = useState('');
    const { filterBooks, reset } = props;

    const handleChange = (value) => {
        setUserInput(value);
    }

    const clearSearch = () => {
        setUserInput('');
    }

    return(
        <div className='searchBar-container'>
            <input onChange={ e => handleChange(e.target.value) } value={ userInput || ''}/>
            <button onClick={ () => filterBooks(userInput) }>search</button>
            <button onClick={() => {clearSearch(); reset() }}>clear search</button>
        </div>
    )
}

export default SearchBar;