export function addBookActionCreator(book) {
    return {
        type: 'ADD_BOOK',
        book,
    }
}
