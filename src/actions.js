export function addBookAC(book) {
    return {
        type: 'ADD_BOOK',
        book,
    }
}


export function fetchBooksAC() {
    return dispatch => {
        dispatch(fetchBookListPendingAC());
        return fetch(`http://localhost:4730/books`)
            .then(response => response.json())
            .then(json => dispatch(fetchBookListSuccessAC(json)))
            .catch(error => dispatch(fetchBookListErrorAC(error)));
    }
}
export function fetchBookListPendingAC() {
    return {
        type: 'FETCH_BOOK_LIST_PENDING'
    }
}
export function fetchBookListSuccessAC(json) {
    return {
        type: 'FETCH_BOOK_LIST_SUCCESS',
        json
    }
}
export function fetchBookListErrorAC(error) {
    return {
        type: 'FETCH_BOOK_LIST_ERROR',
        error
    }
}


export function fetchBookAC(isbn) {
    return dispatch => {
        dispatch(fetchBookPendingAC());
        return fetch(`http://localhost:4730/books/${isbn}`)
            .then(response => response.json())
            .then(json => dispatch(fetchBookSuccessAC(json)))
            .catch(error => dispatch(fetchBookErrorAC(error)));
    }
}
export function fetchBookPendingAC() {
    return {
        type: 'FETCH_BOOK_PENDING'
    }
}
export function fetchBookSuccessAC(json) {
    return {
        type: 'FETCH_BOOK_SUCCESS',
        json
    }
}
export function fetchBookErrorAC(error) {
    return {
        type: 'FETCH_BOOK_ERROR',
        error
    }
}
