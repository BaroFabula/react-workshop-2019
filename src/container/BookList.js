import React, { Fragment, useEffect } from 'react';
import { BookListItem } from "./BookListItem";
import { addBookAC, fetchBooksAC } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const BookList = (props) => {
    useEffect(() => {props.fetchBooks();}, []);
    return (<Fragment>
        <span>{props.error ? props.error.message: ''}</span>
         <ul>
             {props.books.map((book, index) => (
                 <li key={index}><Link to={`/book/${book.isbn}`}><BookListItem book={book}/></Link></li>
             ))}
         </ul>
        <button onClick={() => props.addBook({title: 'my new book'})}>Add book</button>
        <button onClick={() => props.fetchBooks()}>Load list</button>
     </Fragment>);
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        error: state.error
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => {
            dispatch(addBookAC(book))
        },
        fetchBooks: () => dispatch(fetchBooksAC())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
