<template>
  <div class="report-title-form-wrapper">
    <label
      class="report-title"
      for="title"
    >제목</label>
    <input
      id="title"
      type="text"
    >
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.report-title-form-wrapper {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.report-title {
  font-size: 1.2rem;
  font-weight: 600;
  writing-mode: vertical-lr;
  margin-right: 1rem;
}

#title {
  display: inline-block;
  width: 90%;
  height: 3rem;
  padding: 0.3rem;
  outline: none;
  font-size: 1.1rem;
}

</style>
