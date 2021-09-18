<template>
  <div class="report_wrapper">
    <section class="search-form-wrapper">
      <SearchInputForm
        v-model="bookTitle"
        @enter="search"
      />
      <SearchButton @click="search" />
    </section>
    <SearchBooks />
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

        this.calledSearch = false
        console.log(response.data.documents)
        this.$store.commit("search/SET_SEARCH_BOOK_LIST", response.data.documents)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>

<style>

</style>
