<template>
  <ul class="hash-tag-list">
    <li class="tag">
      # {{ bookInfo.authors[0] }}
    </li>
    <li class="tag">
      # {{ bookInfo.title }}
    </li>
  </ul>
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
    }
  },
  beforeMount() {
    this.bookInfo = getItem("bookInfo")
  },
}
</script>

<style scope>
.hash-tag-list {
  display: flex;
  list-style: none;
  margin-bottom: 1rem;
}

.tag {
  margin-right: 0.5rem;
  background-color: #eee;
  padding: 0.3rem;
  box-shadow: 1px 1px 5px 0px #BABABA;
}
</style>
