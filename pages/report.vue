<template>
  <div class="book-report-wrapper">
    <div class="book-wrapper-header">
      <ReportTitleForm v-model="reportTitle" />
    </div>
    <ReportHashTag />
    <ReportMarkDown
      ref="reportMarkDown"
      @setContent="setContent"
    />
    <ReportButton @click="submit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      reportTitle: "",
    }
  },
  methods: {
    submit() {
      this.$refs.reportMarkDown.getContent()
    },
    setContent(report) {
      report = {
        ...report,
        title: this.reportTitle,
      }
      
      this.$store.commit("report/SET_REPORT_CONTENTS", report)
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
