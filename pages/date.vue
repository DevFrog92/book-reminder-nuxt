<template>
  <div>
    <client-only>
      <v-date-picker
        v-model="range"
        is-range
      />
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
    }
  },
}
</script>
