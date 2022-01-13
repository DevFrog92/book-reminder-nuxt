<template>
  <client-only>
    <date-picker
      v-model="date_today"
      placeholder="MM/DD/YYYY"
      format="MM/dd/yyyy"
    />
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      date_today: new Date(),
    }
  },
}
</script>

<style scoped>
.date_picker_wrapper {
  /* width: 100vw; */
  /* height: 100vh; */
  background-color: #999;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}
</style>
