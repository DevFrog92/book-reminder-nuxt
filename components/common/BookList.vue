<template>
  <div class="search-items-wrapper">
    <BookItem
      v-for="(bookItem,index) in bookList"
      :key="index"
      :book-item="bookItem"
    />
  </div>
</template>

<script>
export default {
  props: {
    bookList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.search-items-wrapper {
  margin-top: 3rem;
  margin-bottom: 3rem;
  width:100%;
  height: 100%;
  display: grid;
  gap: 2rem ;
  grid-template-columns: repeat(6, 1fr);
}

@media (max-width:1000px){
  .search-items-wrapper {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width:756px){
  .search-items-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width:480px){
  .search-items-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
