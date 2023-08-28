import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [ userInput, setUserInput ] = useState('');
    // const { filterBooks, reset } = props;

    const handleChange = (value) => {
        setUserInput(value);
    }

    return(
        <div className='searchBar-container'>
            <input onChange={ handleChange } value={ userInput || ''}/>
            <button>search</button>
            <button>clear Search</button>
        </div>
    )
}

export default SearchBar;