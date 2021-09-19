<template>
  <div class="book-item-wrapper ">
    <div class="book-author">
      {{ bookItem.authors[0] }}
    </div>
    <div class="book-content">
      {{ bookItem.contents }}
    </div>
    <div class="book-thumbnail">
      <img
        :src="bookItem.thumbnail"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>
.book-item-wrapper{
  margin: 1rem 0;
  border: 1px solid;
  padding: 1rem;
}
</style>
