<template>
  <div class="book-item-wrapper">
    <img
      :src="bookItem.thumbnail"
      alt="book cover thumbnail"
      class="book-thumbnail-img"
      @click="moveToReport"
    >
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
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.book-thumbnail-img {
  display: inline-block;
  object-fit:contain;
  -webkit-box-shadow: 5px 5px 15px 0px #BABABA;
  box-shadow: 5px 5px 15px 0px #BABABA;
}
</style>
