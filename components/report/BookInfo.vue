<template>
  <div class="book-info-wrapper">
    <div class="book-cover-thumbnail-wrapper">
      <img
        :src="bookInfo.thumbnail"
        alt="book cover"
        class="book-cover-img"
        @click="showDesc"
      >
    </div>
    <ReportHoverModal
      v-if="showDescState"
      class="book-hover-modal"
      :book-info="bookInfo"
    />
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
        authors: [null],
      },
      imgEle: null,
      showDescState: false,
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
    showDesc() {
      this.showDescState = !this.showDescState
    },

  },
}
</script>

<style scoped>
.book-info-wrapper {
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
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
  cursor: pointer;
}


.book-hover-modal {
  position: absolute;
  top: -4rem;
  left: 0;
}

</style>
