<template>
  <div class="book-info-wrapper">
    <div class="book-cover-thumbnail-wrapper">
      <img
        :src="bookInfo.thumbnail"
        alt="book cover"
        class="book-cover-img"
      >
    </div>
    <div class="book-desc-wrapper">
      <h3 class="book-title">
        {{ bookInfo.title }}
      </h3>
      <h5>
        {{ bookInfo.authors[0] }}
      </h5>
      <p class="book-content">
        {{ bookInfo.contents }}
      </p>
    </div>
  </div>
</template>

<script>
import { getItem, } from "~/assets/util/localStorage.js"
export default {
  data() {
    return {
      bookInfo: {
        thumbnail: null,
        title: null,
        contents: null,
        auth: null,
      },
      imgEle: null,
    }
  },
  beforeMount() {
    this.bookInfo = getItem("bookInfo")
  },
  mounted() {
    this.imgEle = document.querySelector(".book-cover-img")
    this.setBookCover()
  },
  methods: {
    setBookCover() {
      this.imgEle.src = this.bookInfo.thumbnail
    },
  },
}
</script>

<style scoped>
.book-info-wrapper {
  width: 100%;
  height: 10rem;
  border: 1px solid black;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.book-cover-thumbnail-wrapper {
  height: 100%;
  width: 7rem;
  border: 3px solid black;
  border-style: ridge;
}

.book-cover-thumbnail-wrapper img {
  width: 100%;
  height: 100%;
}

.book-desc-wrapper {
  height: 100%;
  width: 80%;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.book-content{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}
</style>
