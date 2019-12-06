import React, { Fragment } from 'react';
import { BookListItem } from "./BookListItem";
import { addBookActionCreator } from "../actions";
import { connect } from "react-redux";

const BookList = (props) => {
    /*const getBooks = () => {
        fetch('http://localhost:4730/books')
          .then((newBooksJson) => newBooksJson.json())
          .then((newBooksArray) => {setBooks(newBooksArray);});
    };

    useEffect(() => getBooks(), []);
    */
    return (<Fragment>
         <ul>
             {props.books.map((book, index) => (
                 <li key={index}><BookListItem book={book}/></li>
             ))}
         </ul>
        <button onClick={() => props.update({title: 'my new book'})}>Add book</button>
     </Fragment>);
};

const mapStateToProps = (state) => {
    return { books: state.books };
};
const mapDispatchToProps = (dispatch) => {
    return { update: (book) => {dispatch(addBookActionCreator(book))}};
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
