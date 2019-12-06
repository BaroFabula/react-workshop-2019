export function addBookAC(book) {
    return dispatch => {
        return postData(`http://localhost:4730/books`, book)
            .then(response => response.json())
            .then(json => dispatch(fetchBooksAC()))
            .catch(error => dispatch(fetchBooksAC()));
    }
}

function postData(url, data) {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
}

function putData(url, data) {
    return fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
}

export function deleteBookAC(isbn) {
    return dispatch => {
        return deleteData(`http://localhost:4730/books/${isbn}`)
            .then(json => dispatch(fetchBooksAC()))
            .catch(error => dispatch(fetchBooksAC()));
    }
}

function deleteData(url, data) {
    return fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
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

export function editBookAC(key, value) {
    return {
        type: 'EDIT_BOOK',
        key,
        value
    }
}

export function saveEditBookAC(edited) {
    return dispatch => {
        return putData(`http://localhost:4730/books/${edited.isbn}`, edited)
            .then(response => response.json())
            .then(json => dispatch(fetchBookSuccessAC(json)))
            .catch(error => dispatch(fetchBookErrorAC(error)));
    }
}
export  function saveNewBookAC(edited) {
    return dispatch => {
        return postData(`http://localhost:4730/books`, edited)
            .then(response => response.json())
            .then(json => dispatch(fetchBooksAC()))
            .catch(error => dispatch(fetchBooksAC()));
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
