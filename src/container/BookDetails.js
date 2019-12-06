import React, { Fragment, useEffect } from 'react';
import {
    fetchBookAC
} from "../actions";
import { connect } from "react-redux";

const BookDetails = (props) => {
    useEffect(() => {props.fetchBook(props.match.params.isbn);}, []);
    return (<Fragment>
        <span>{props.error ? props.error.message: ''}</span>
        {props.book ?
            <><div>{props.book.isbn}</div>
            <div>{props.book.title}</div></>:''}
    </Fragment>);
};

const mapStateToProps = (state) => {
    return {
        book: state.book,
        error: state.error
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchBook: (isbn) => dispatch(fetchBookAC(isbn))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
