const INITIAL_STATE = {
    books : [],
    fetching: false,
    error: null
};

export function booksReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            let newStateA = {...state};
            newStateA.books = [...newStateA.books, action.book];
            newStateA.error = null;
            return newStateA;
        case 'FETCH_BOOK_LIST_PENDING':
            let newStateC = {...state};
            newStateC.books = [...newStateC.books];
            newStateC.fetching = true;
            newStateC.error = null;
            return newStateC;
        case 'FETCH_BOOK_LIST_SUCCESS':
            let newStateB = {...state};
            newStateB.books = [...action.json];
            newStateB.fetching = false;
            newStateB.error = null;
            return newStateB;
        case 'FETCH_BOOK_LIST_ERROR':
            let newStateD = {...state};
            newStateD.books = [...state.books];
            newStateD.fetching = false;
            newStateD.error = action.error;
            return newStateD;
        default:
            return state;
    }
}
