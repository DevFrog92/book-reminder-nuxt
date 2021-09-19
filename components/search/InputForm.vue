<template>
  <div class="search-input-form">
    <input
      type="text"
      :value="value"
      placeholder="도서명 또는 작가의 이름을 입력해주세요"
      @input="$emit('input', $event.target.value)"
      @keyup.enter.exact="$emit('enter')"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      bookTitle: "",
    }
  },
  methods: {
  },
}
</script>

<style>

</style>
