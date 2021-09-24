<template>
  <div class="book-report-wrapper">
    <ReportBookInfo />
    <ReportMarkDown ref="reportMarkDown" />
    <ReportButton @click="submit" />
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      this.$refs.reportMarkDown.getContent()
    },
  },
}
</script>

<style scope>
.book-report-wrapper {
  width: 100vw;
  min-height: 100vh;
  padding: 10% 10% 0;
}

</style>
