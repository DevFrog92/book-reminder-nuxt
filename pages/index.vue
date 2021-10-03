<template>
  <div class="rending-page-wrapper">
    <BookList :book-list="reports" />
  </div>
</template>

<script>
export default {
  computed: {
    reports() {
      return this.$store.state.report.reportContents || null
    },
  },
  mounted() {
    console.log(this.reports)
  },
}
</script>

<style scoped>
.rending-page-wrapper {
  border: 1px solid;
  width: 100vw;
  min-height: 100vh;
  padding: 3% 10% 0;
}

.reports-list {
  display: grid;
  gap: 2rem ;
  grid-template-columns: repeat(6, 1fr);
}

.report-item {
  height: 11rem;
  border: 1px solid black;
}
</style>
