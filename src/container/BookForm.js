import React from 'react';

export const BookForm = (props) => {
    const submitForm = () => {
        console.log('Submit Form');
    };
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>{props.book.isbn}</h3>
            <label>Titel</label><input value={props.book.title} onChange={props.handleChangeTitle}/>
            <input type='submit' value={'submit'}/>
        </form>
    );
};
