const INITIAL_STATE = {
    books : [{title : 'A'}, {title : 'B'}, {title : 'C'}]
};

export function booksReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            let newState = {...state};
            newState.books = [...newState.books, action.book];
            return newState;
        default:
            return state;
    }
}
