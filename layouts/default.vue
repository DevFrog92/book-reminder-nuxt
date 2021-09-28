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
