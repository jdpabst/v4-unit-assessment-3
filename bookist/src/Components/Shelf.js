import React from 'react';
import './Shelf.css';

function Shelf(props){
    const { shelf, clearShelf } = props;
    console.log(shelf);
    return (
        <div className="shelf-container">
            <h2> Your Shelf </h2>
            <button onClick={() => clearShelf() }>clear shelf</button>
            <ul className="shelf-list-container">
                {shelf.map((item, index) => (
                    <li key={ index } className='shelf-list'>{ item }</li>
                ))}
            </ul>
        </div>
    )
}

export default Shelf;