<template>
  <div class="book-report-wrapper">
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

<style>

</style>
