export function addBookActionCreator(book) {
    console.log('addBookActionCreator');
    return {
        type: 'ADD_BOOK',
        book,
    }
}
export function fetchBooks() {
    console.log('fetchBooks');
    return dispatch => {
        console.log('dispatch');
        dispatch(addFetchBookListPendingAC());
        return fetch(`http://localhost:4730/books`)
            .then(response => response.json())
            .then(json => dispatch(addFetchBookListSuccessAC(json)));
    }
}

export function addFetchBookListPendingAC() {
    console.log('addFetchBookListPendingAC');
    return {
        type: 'FETCH_BOOK_LIST_PENDING'
    }
}
export function addFetchBookListSuccessAC(json) {
    console.log('addFetchBookListSuccessAC');
    return {
        type: 'FETCH_BOOK_LIST_SUCCESS',
        json
    }
}
