<template>
  <div class="report-title-form-wrapper">
    <input
      id="title"
      :value="value"
      type="text"
      placeholder="제목을 입력하세요"
      @input="setReportTitle"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    setReportTitle(e) {
      this.$emit("input", e.target.value)
    },
  },
}
</script>

<style scoped>
.report-title-form-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

#title {
  display: inline-block;
  width: 100%;
  height: 3rem;
  padding: 0.3rem;
  outline: none;
  font-size: 1.1rem;
}
</style>
