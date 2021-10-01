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
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
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
  margin-bottom: 2rem;
}

.tag {
  margin-right: 1rem;
  background-color: #eee;
  padding: 0.2rem;
}

</style>
