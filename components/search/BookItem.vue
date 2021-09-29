<template>
  <div class="book-item-wrapper">
    <div class="book-thumbnail">
      <img
        :src="bookItem.thumbnail"
        alt="book cover thumbnail"
      >
    </div>
    <div class="book-info-wrapper">
      <h3>
        {{ bookItem.title }}
      </h3>
      <div class="book-author">
        {{ bookItem.authors[0] }}
      </div>
      <button @click="moveToReport">
        독후감 작성하기
      </button>
    </div>
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
  min-width: 10rem;
  height: 20rem;
  border: 1px solid;
  padding: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 5px 5px 15px 0px #BABABA;
  box-shadow: 5px 5px 15px 0px #BABABA;
  display: flex;
  align-items: center;
}

.book-thumbnail {
  width: 20%;
  height: 100%;
}

.book-info-wrapper {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.book-info-content {
  font-size: 0.8rem;
}
</style>
