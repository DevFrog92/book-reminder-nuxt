<template>
  <div class="search-input-form">
    <input
      v-model="bookTitle"
      type="text"
      placeholder="도서명 또는 작가의 이름을 입력해주세요"
    >
    <button @click="searchBookInfo">
      Search
    </button>
  </div>
</template>

<script>
import { fetchBookInfo, } from "~/api/index"
export default {
  data() {
    return {
      bookTitle: "",
    }
  },
  methods: {
    async searchBookInfo() {
      if (! this.bookTitle.trim().length) {
        alert("뭐라도 적어라 이놈아!!")

        return
      }

      try {
        const response = await fetchBookInfo(this.bookTitle)

        console.log(response)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>

<style>

</style>
