import React, { Fragment, useEffect } from 'react';
import {
    editBookAC,
    fetchBookAC, saveEditBookAC
} from "../actions";
import { connect } from "react-redux";
import { BookForm } from "./BookForm";



const BookDetails = (props) => {
    useEffect(() => {props.fetchBook(props.match.params.isbn);}, []);
    const handleChangeTitle = (event) =>  {
        props.editBook('title', event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.saveEditBook(props.edit);
    }

    return (<Fragment>
        <span>{props.error ? props.error.message: ''}</span>
        {props.book ?
            <><div>{props.book.isbn}</div>
            <div>{props.book.title}</div></>:''}
        {props.book?<BookForm book={props.edit} handleChangeTitle={handleChangeTitle} handleSubmit={handleSubmit}/>:''}
    </Fragment>);
};

const mapStateToProps = (state) => {
    return {
        book: state.book,
        error: state.error,
        edit: state.edit
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchBook: (isbn) => dispatch(fetchBookAC(isbn)),
        editBook: (key, value) => dispatch(editBookAC(key, value)),
        saveEditBook: (edited) => dispatch(saveEditBookAC(edited))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
