<template>
  <div class="report_wrapper">
    <section class="search-form-wrapper">
      <SearchInputForm
        v-model="bookTitle"
        @enter="search"
      />
      <SearchButton @click="search" />
    </section>
    <SearchBookList />
  </div>
</template>

<script>
import { fetchBookInfo, } from "~/api/index"

export default {
  data() {
    return {
      bookTitle: "",
      calledSearch: false,
    }
  },
  methods: {
    async search() {
      if (! this.bookTitle.trim().length) {
        alert("뭐라도 적어라 이놈아!!")

        return
      }

      if (this.calledSearch) {
        return
      }

      this.calledSearch = true
      try {
        const response = await fetchBookInfo(this.bookTitle)

        this.bookTitle = ""
        this.calledSearch = false
        this.$store.commit("search/SET_SEARCH_BOOK_LIST", response.data.documents)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>

<style scoped>
.report_wrapper {
  width: 100%;
  min-height: 100vh;
  padding: 0 20%;
}

.search-form-wrapper {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
