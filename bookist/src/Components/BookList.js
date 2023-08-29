import React from 'react';
import './BookList.css';

function BookList(props) {
    const { books, addToShelf } = props;
    console.log(books);
    return (
        <div>
            <ul className='books-container'>
                {books.map((item, index) => (
                    <li key={ index }>
                        <div className="book-cover" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }}></div>
                        <p>{ item.title }</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;