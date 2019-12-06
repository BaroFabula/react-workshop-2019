const INITIAL_STATE = {
    books : [],
    fetching: false,
    error: null,
    book: null,
    edit: {isbn: Math.floor(Math.random()*1000000000000), title: ''}
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
            fetchBooklistPendingState.edit = {isbn: Math.floor(Math.random()*1000000000000), title: ''};
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
            fetchBookSuccessState.edit = action.json;
            return fetchBookSuccessState;
        case 'FETCH_BOOK_ERROR':
            let fetchBookErrorState = {...state};
            fetchBookErrorState.books = [];
            fetchBookErrorState.fetching = false;
            fetchBookErrorState.error = action.error;
            fetchBookErrorState.book = null;
            return fetchBookErrorState;
        case 'EDIT_BOOK':
            let editBookState = {...state};
            editBookState.edit = {...state.edit};
            editBookState.edit[action.key] = action.value;
            return editBookState;
        case 'SAVE_EDIT_BOOK':
            let saveEditBookState = {...state};
            saveEditBookState.book = {...state.edit};
            return  saveEditBookState;
        case 'SAVE_NEW_BOOK':
            let saveNewBookState = {...state};
            saveNewBookState.books = [...state.books, state.edit]
            saveNewBookState.edit = {isbn: Math.floor(Math.random()*1000000000000), title: ''};
            return saveNewBookState;
        default:
            return state;
    }
}
