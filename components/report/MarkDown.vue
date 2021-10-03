<template>
  <div class="mark-down-wrapper">
    <ClientOnly>
      <editor
        ref="toastTextUi"
        :options="options"
        align="left"
        height="500px"
      />
    </ClientOnly>
  </div>
</template>

<script>
import { getItem, } from "~/assets/util/localStorage.js"

export default {
  data() {
    return {
      options: {
        language: "ko",
        hooks: { addImageBlobHook: this.addImageBlobHook, },
      },
      bookInfo: null,
    }
  },
  beforeMount() {
    this.bookInfo = getItem("bookInfo")
  },
  methods: {
    addImageBlobHook() {
      // TODO: 추후 백엔드 설계 후 url로만 대체할 수 있도록 구현 필요
    },
    getContent() {
      const now = new Date()
      const content = this.$refs.toastTextUi.invoke("getHTML")
      const createdAt = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
      const report = {
        content: content,
        createdAt,
        thumbnail: this.bookInfo.thumbnail,
      }

      this.$emit("setContent", report)
    },
  },

}
</script>

<style scoped>
.mark-down-wrapper {
  width: 100%;
}
</style>
