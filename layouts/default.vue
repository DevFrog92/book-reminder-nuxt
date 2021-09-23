<template>
  <main>
    <header>
      <Nav />
    </header>
    <section class="main">
      <Nuxt class="pages" />
    </section>
  </main>
</template>

<script>
import Nav from "../components/Nav.vue"
export default {
  components: { Nav, },

}
</script>

<style>
.main {
  padding: 5% 20% 0;
}
</style>
