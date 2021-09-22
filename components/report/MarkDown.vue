<template>
  <div class="mark-down-wrapper">
    <ClientOnly>
      <div class="report-title">
        <label for="title">report title</label>
        <input
          v-model="contentTitle"
          type="text"
          class="title"
        >
      </div>
      <editor
        ref="toastTextUi"
        :initial-value="initalValue"
        :options="options"
        align="left"
        height="600px"
      />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initalValue: "이곳에 작성해주세요!",
      contentTitle: "",
      options: {
        language: "ko",
        hooks: { addImageBlobHook: this.addImageBlobHook, },
      },
    }
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
        title: this.contentTitle,
        content: content,
        createdAt,
      }

      this.$store.commit("report/SET_REPORT_CONTENTS", report)
    },
  },

}
</script>

<style scoped>

</style>
