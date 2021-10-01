<template>
  <div class="book-report-wrapper">
    <div class="book-wrapper-header">
      <ReportTitleForm />
    </div>
    <ReportHashTag />
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
  width: 100%;
  padding: 1% 10% 0%;
}

.book-wrapper-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>
