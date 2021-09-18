<template>
  <div class="search-items-wrapper">
    {{ searchBookList }}
  </div>
</template>

<script>
export default {
  computed: {
    searchBookList() {
      return this.$store.state.search.searchBookList || null
    },
  },
}
</script>

<style>

</style>
