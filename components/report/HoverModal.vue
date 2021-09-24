<template>
  <div class="book-desc-wrapper">
    <h4 class="book-title">
      {{ bookInfo.title }}
    </h4>
    <h5>
      {{ bookInfo.authors[0] }}
    </h5>
    <p class="book-content">
      {{ bookInfo.contents }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    bookInfo: {
      type: Object,
      default: () => ({}),
    },
  },

}
</script>

<style scope>
.book-desc-wrapper {
  height: 4rem;
  width: 100%;
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
  font-size: 0.7rem;
}
</style>
