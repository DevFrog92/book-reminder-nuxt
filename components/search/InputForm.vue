<template>
  <div class="search-input-form">
    <input
      type="text"
      :value="value"
      class="search_input"
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

<style scoped>
.search-input-form {
  width: 60%;
}

.search_input {
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  outline: none;
  border-radius: 2px 0 0 2px;
  border: 1px solid rgba(0,0,0,0.2);
  border-right: 0;
}
</style>
