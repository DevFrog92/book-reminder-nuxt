<template>
  <div class="book-item-wrapper">
    <img
      v-if="bookItem.thumbnail"
      :src="bookItem.thumbnail"
      alt="book cover thumbnail"
      class="book-thumbnail-img"
      @click="moveToReport"
    >
    <div
      v-else
      class="no-img-wrapper"
    >
      <img
        src="~/assets/images/oops.svg"
        alt="book cover thumbnail"
        class="book-thumbnail-no-img"
        @click="moveToReport"
      >
      <div class="no-image-desc">
        Stickers made by <a
          href="https://www.flaticon.com/authors/stickers"
          title="Stickers"
        >Stickers</a> from <a
          href="https://www.flaticon.com/"
          title="Flaticon"
        >www.flaticon.com</a>
      </div>
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

.no-img-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.book-thumbnail-no-img {
  width: 90%;
  height: 100%;
  object-fit: contain;
}

.no-image-desc {
  font-size: 5px;
  color: rgba(0,0,0,0.2)
}

.no-image-desc a, .no-image-desc a:active {
  color: rgba(0,0,0,0.2);
  text-decoration: none;
  pointer-events: none;
}
</style>
