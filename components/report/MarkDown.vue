<template>
  <div class="mark-down-wrapper">
    <ClientOnly>
      <editor
        v-model="content"
        :initial-value="initalValue"
        :options="options"
        align="left"
        height="600px"
      />
      <button @click="write">
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
  },

}
</script>

<style>

</style>
