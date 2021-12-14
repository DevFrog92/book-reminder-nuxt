export default {
  data() {
    return {
      bodyElem: null,
      toastElem: null,
    }
  },
  created() {
    this.$nuxt.$on("show:toast", this.appendToast)
  },
  mounted() {
    this.grabBodyElem()
  },
  methods: {
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
  appendToast() {
    const toastElem = this.createToastElem()

    this.bodyElem.appendChild(toastElem)
    setTimeout(() => {
      this.toastElem.classList.add("hide")
      setTimeout(() => {
        this.removeToast()
      }, 1000)
    }, 2000)
  },
  beforeDestory() {
    this.$nuxt.$off("show:toast", this.appendChild)
  },
}
