<template>
  <div class="book-item-wrapper">
    <div class="book-thumbnail">
      <img
        :src="bookItem.thumbnail"
        alt="book cover thumbnail"
        class="book-thumbnail-img"
      >
    </div>
    <div class="book-info-desc">
      <h5 class="book-info-title">
        {{ bookItem.title }}
      </h5>
      <div class="book-info-author">
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
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.book-thumbnail {
  position: absolute;
}

.book-thumbnail-img {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit:contain;
  -webkit-box-shadow: 5px 5px 15px 0px #BABABA;
  box-shadow: 5px 5px 15px 0px #BABABA;
}

.book-info-desc {
  width:100%;
  height: 100%;
  position: absolute;
  color: #fff;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem;
  align-items: center;
  opacity: 0;
  transition: all .4s ease-out;
  z-index: -2;
}

.book-thumbnail-img:hover .book-info-desc{
  opacity: 1;
  z-index: 3;
}

.book-info-title {
  font-weight: 600;
  font-size: 1.1rem;
}

</style>
