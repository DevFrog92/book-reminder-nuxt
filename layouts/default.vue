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
import setToast from "../mixins/setToast"

export default {
  components: {
    Footer,
  },
  mixins: [setToast],
}
</script>
