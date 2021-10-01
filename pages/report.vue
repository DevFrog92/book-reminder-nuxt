<template>
  <div class="book-report-wrapper">
    <div class="book-wrapper-header">
      <ReportTitleForm class="report-title-form-component" />
      <ReportBookInfo />
    </div>

    <ReportMarkDown ref="reportMarkDown" />
    <ReportButton @click="submit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDescState: false,
    }
  },
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

.book-wrapper-header {
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}
</style>
