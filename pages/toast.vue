<template>
  <div class="">
    toast
    <button @click="appendToast">
      append
    </button>
    <button @click="removeToast">
      remove
    </button>
  </div>
</template>

<script>
export default {
  layout: "test",
  data() {
    return {
      bodyElem: null,
      toastElem: null,
    }
  },
  mounted() {
    // const nuxtRootElem = document.querySelector("#__nuxt")
    this.grabBodyElem()
  },
  methods: {
    appendToast() {
      const toastElem = this.createToastElem()

      this.bodyElem.appendChild(toastElem)
    },
    grabBodyElem() {
      this.bodyElem = document.querySelector("body")
    },
    createToastElem() {
      this.toastElem = document.createElement("div")

      this.toastElem.classList.add("toast_component_wrapper")
      this.toastElem.innerText = "이것은 토스트 입니다."

      return this.toastElem
    },
    removeToast() {
      this.bodyElem.removeChild(this.toastElem)
    },
  },
}
</script>

<style>
</style>
