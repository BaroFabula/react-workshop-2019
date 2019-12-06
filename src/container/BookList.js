import React, { Fragment, useEffect } from 'react';
import { BookListItem } from "./BookListItem";
import { addBookActionCreator, addFetchBookListPendingAC, addFetchBookListSuccessAC, fetchBooks } from "../actions";
import { connect } from "react-redux";

const BookList = (props) => {
    useEffect(() => {props.fetchBooks();}, []);
    return (<Fragment>
        <span>{props.error ? props.error.message: ''}</span>
         <ul>
             {props.books.map((book, index) => (
                 <li key={index}><BookListItem book={book}/></li>
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
            dispatch(addBookActionCreator(book))
        },
        fetchBooks: () => dispatch(fetchBooks())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
