export const state = () => ({
  BookList: null,
})

export const mutations = {
  SET_SEARCH_BOOK_LIST(state, searchBooks) {
    state.BookList = searchBooks
  },
}
