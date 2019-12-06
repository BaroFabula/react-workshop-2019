import React, { Fragment, useEffect } from 'react';
import { BookListItem } from "./BookListItem";
import { addBookAC, deleteBookAC, editBookAC, fetchBooksAC, saveEditBookAC, saveNewBookAC } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BookForm } from "./BookForm";

const BookList = (props) => {
    const handleChangeTitle = (event) =>  {
        props.editBook('title', event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.saveNewBook(props.edit);
    }
    useEffect(() => {
        props.fetchBooks();
        }, []);
    return (<Fragment>
        <span>{props.error ? props.error.message: ''}</span>
         <ul>
             {props.books.map((book, index) => (
                 <li key={index}><Link to={`/book/${book.isbn}`}><BookListItem book={book}/></Link><button onClick={() => props.deleteBook(book.isbn)}> DEL</button></li>
             ))}
         </ul>
        <button onClick={() => props.addBook({title: 'my new book', isbn: Math.floor(Math.random()*100000000)})}>Add book</button>
        <button onClick={() => props.fetchBooks()}>Load list</button>
        <BookForm book={props.edit} handleChangeTitle={handleChangeTitle} handleSubmit={handleSubmit}/>
     </Fragment>);
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        error: state.error,
        edit: state.edit
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => {
            dispatch(addBookAC(book))
        },
        deleteBook: (isbn) => {
            dispatch(deleteBookAC(isbn))
        },
        fetchBooks: () => dispatch(fetchBooksAC()),
        editBook: (key, value) => dispatch(editBookAC(key, value)),
        saveNewBook: (edited) => dispatch(saveNewBookAC(edited))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
