<template>
  <div class="book-report-wrapper">
    <div class="book-wrapper-header">
      <ReportBookInfo />
      <ReportTitleForm class="report-title-form-component" />
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
  border: 1px solid;
  display: flex;
  justify-content: space-evenly;
}
</style>
