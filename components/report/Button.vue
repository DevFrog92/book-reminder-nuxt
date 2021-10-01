<template>
  <div class="search-button-wrapper">
    <button
      class="submit-button"
      @click="$emit('click')"
    >
      저장하긴
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search-button-wrapper {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.submit-button {
  width: 6rem;
  height: 2rem;
  border: 1px solid #eee;
  background-color: #eee;
  color: rgba(0,0,0,0.8);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 3px;
  box-shadow: 2px 2px 5px 0px #BABABA;
  cursor: pointer;
}
</style>
