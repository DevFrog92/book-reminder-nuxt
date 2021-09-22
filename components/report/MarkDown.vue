<template>
  <div class="mark-down-wrapper">
    <ClientOnly>
      <div class="show-content" />
      <editor
        ref="toastTextUi"
        :value="content"
        :initial-value="initalValue"
        :options="options"
        align="left"
        height="600px"
      />
      <button @click="getHTML">
        작성
      </button>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initalValue: "이곳에 작성해주세요!",
      options: {
        language: "ko",
        hooks: { addImageBlobHook: this.addImageBlobHook, },
      },
      content: "",
    }
  },
  methods: {
    addImageBlobHook() {
      // TODO: 추후 백엔드 설계 후 url로만 대체할 수 있도록 구현 필요
    },
    write() {
      console.log(this.content)
    },
    getHTML() {
      const contentElem = document.querySelector(".show-content")
      let html = this.$refs.toastTextUi.invoke("getHTML")

      contentElem.innerHTML = html

      // this.contentHTML = html
      console.log(html)
    },
  },

}
</script>

<style>

</style>
