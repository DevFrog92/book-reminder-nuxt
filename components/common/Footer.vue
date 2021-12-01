<template>
  <div class="footer-wrapper">
    this is footer
    <button @click="show">
      show
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$nuxt.$emit("show:toast")
    },
  },
}
</script>

<style scoped>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: #eee;
  padding: 2rem;
}

</style>
