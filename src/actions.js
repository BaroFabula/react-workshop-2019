export function addBookActionCreator(book) {
    return {
        type: 'ADD_BOOK',
        book,
    }
}
export function fetchBooks() {
    return dispatch => {
        dispatch(addFetchBookListPendingAC());
        return fetch(`http://localhost:4730/books`)
            .then(response => response.json())
            .then(json => dispatch(addFetchBookListSuccessAC(json)))
            .catch(error => dispatch(fetchBookListError(error)));
    }
}

export function addFetchBookListPendingAC() {
    return {
        type: 'FETCH_BOOK_LIST_PENDING'
    }
}
export function addFetchBookListSuccessAC(json) {
    return {
        type: 'FETCH_BOOK_LIST_SUCCESS',
        json
    }
}

export function fetchBookListError(error) {
    return {
        type: 'FETCH_BOOK_LIST_ERROR',
        error
    }
}
