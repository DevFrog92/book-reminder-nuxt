<template>
  <div class="search-button-wrapper">
    <button
      class="search_button"
      @click="$emit('click')"
    >
      검색하기
    </button>
  </div>
</template>

<style scoped>
.search-button-wrapper {
  min-width: 20%;
}

.search_button {
  width: 100%;
  height: 3rem;
  border-radius: 0 2px 2px 0;
  border: 1px solid rgba(0,0,0,0.2);
}
</style>
