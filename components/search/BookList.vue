<template>
  <div class="search-items-wrapper">
    <SearchBookItem
      v-for="(bookItem,index) in searchBookList"
      :key="index"
      :book-item="bookItem"
    />
  </div>
</template>

<script>
export default {
  computed: {
    searchBookList() {
      return this.$store.state.search.searchBookList || null
    },
  },
}
</script>

<style>

</style>
