<template>
  <main id="main">
    <header>
      <Nav />
    </header>
    <section class="main">
      <Nuxt class="pages" />
    </section>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped>
#main {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(78, 77, 77);
}
</style>
