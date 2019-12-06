const INITIAL_STATE = {
    books : [],
    fetching: false,
    error: null,
    book: null
};

export function booksReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            let addBookState = {...state};
            addBookState.books = [...addBookState.books, action.book];
            addBookState.error = null;
            addBookState.book = null;
            return addBookState;
        case 'FETCH_BOOK_LIST_PENDING':
            let fetchBooklistPendingState = {...state};
            fetchBooklistPendingState.books = [...fetchBooklistPendingState.books];
            fetchBooklistPendingState.fetching = true;
            fetchBooklistPendingState.error = null;
            fetchBooklistPendingState.book = null;
            return fetchBooklistPendingState;
        case 'FETCH_BOOK_LIST_SUCCESS':
            let fetchBooklistSuccessState = {...state};
            fetchBooklistSuccessState.books = [...action.json];
            fetchBooklistSuccessState.fetching = false;
            fetchBooklistSuccessState.error = null;
            fetchBooklistSuccessState.book = null;
            return fetchBooklistSuccessState;
        case 'FETCH_BOOK_LIST_ERROR':
            let fechtBooklistErrorState = {...state};
            fechtBooklistErrorState.books = [...state.books];
            fechtBooklistErrorState.fetching = false;
            fechtBooklistErrorState.error = action.error;
            fechtBooklistErrorState.book = null;
            return fechtBooklistErrorState;
        case 'FETCH_BOOK_PENDING':
            let fetchBookPendingState = {...state};
            fetchBookPendingState.books = [];
            fetchBookPendingState.fetching = true;
            fetchBookPendingState.error = null;
            fetchBookPendingState.book = null;
            return fetchBookPendingState;
        case 'FETCH_BOOK_SUCCESS':
            let fetchBookSuccessState = {...state};
            fetchBookSuccessState.books = [];
            fetchBookSuccessState.fetching = false;
            fetchBookSuccessState.error = null;
            fetchBookSuccessState.book = action.json;
            return fetchBookSuccessState;
        case 'FETCH_BOOK_ERROR':
            let fetchBookErrorState = {...state};
            fetchBookErrorState.books = [];
            fetchBookErrorState.fetching = false;
            fetchBookErrorState.error = action.error;
            fetchBookErrorState.book = null;
            return fetchBookErrorState;
        default:
            return state;
    }
}
