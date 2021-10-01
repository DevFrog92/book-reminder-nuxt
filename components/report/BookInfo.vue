<template>
  <div class="book-info-wrapper">
    <img
      :src="bookInfo.thumbnail"
      alt="book cover"
      class="book-cover-img"
      @click="showDesc"
    >
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
  width: 20%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

.book-cover-img {
  height: 100%;
  cursor: pointer;
  -webkit-box-shadow: 5px 5px 15px 0px #BABABA;
  box-shadow: 5px 5px 15px 0px #BABABA;
  object-fit: contain;
  display: block;
}


.book-hover-modal {
  position: absolute;
  top: -4rem;
  left: 0;
}
</style>
