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
  margin-top: 3rem;
  width:100%;
  height: 100%;
  display: grid;
  gap: 1rem ;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width:1000px){
  .search-items-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width:756px){
  .search-items-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width:480px){
  .search-items-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
