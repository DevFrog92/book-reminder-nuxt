<template>
  <div class="book-item-wrapper">
    <div class="book-author">
      {{ bookItem.authors[0] }}
    </div>
    <div class="book-content">
      {{ bookItem.contents }}
    </div>
    <div class="book-thumbnail">
      <img
        :src="bookItem.thumbnail"
        alt="book cover thumbnail"
      >
    </div>
    <button @click="moveToReport">
      독후감 작성하기
    </button>
  </div>
</template>

<script>
import { setItem, } from "~/assets/util/localStorage.js"
export default {
  props: {
    bookItem: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    moveToReport() {
      setItem("bookInfo", this.bookItem)
      this.$router.push("/report")
    },
  },
}
</script>

<style scoped>
.book-item-wrapper{
  margin: 1rem 0;
  border: 1px solid;
  padding: 1rem;
  border-radius: 1rem;
  
}
</style>
