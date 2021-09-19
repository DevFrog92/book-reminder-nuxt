export const state = () => ({
  searchBookList: null,
})

export const mutations = {
  SET_SEARCH_BOOK_LIST(state, searchBooks) {
    state.searchBookList = searchBooks
  },
}
