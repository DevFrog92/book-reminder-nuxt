<template>
  <main id="main">
    <header>
      <Nav />
    </header>
    <section class="main">
      <Nuxt class="pages" />
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from "~/components/common/Footer"
export default {
  components: {
    Footer,
  },
}
</script>
