import React from 'react';
import './BookList.css';

function BookList(props) {
    const { books, addToShelf } = props;
    
    return (
        <div>
            <ul className='books-container'>
                {books.map((item, index) => (
                    <li key={ index } className='book-info-container'>
                        <div className="book-cover-container" onClick={ () => addToShelf(item.title) }>
                            <img className="book-cover" src={ item.img } />
                        </div>
                        <p className='book-title'>{ item.title } by { item.author } </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;