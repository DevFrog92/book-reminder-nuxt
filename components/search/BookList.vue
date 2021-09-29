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

<style scoped>
.search-items-wrapper {
  width:100%;
  height: 100%;
  display: grid;
  border: 1px solid;
  gap: 10px 10px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
