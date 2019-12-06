const INITIAL_STATE = {
    books : [],
    fetching: false
};

export function booksReducer(state = INITIAL_STATE, action) {
    console.log('booksReducer' + action.type);
    switch (action.type) {
        case 'ADD_BOOK':
            let newStateA = {...state};
            newStateA.books = [...newStateA.books, action.book];
            return newStateA;
        case 'FETCH_BOOK_LIST_PENDING':
            let newStateC = {...state};
            newStateC.books = [...newStateC.books];
            newStateC.fetching = true;
            return newStateC;
        case 'FETCH_BOOK_LIST_SUCCESS':
            let newStateB = {...state};
            newStateB.books = [...action.json];
            newStateB.fetching = false;
            return newStateB;
        default:
            return state;
    }
}
