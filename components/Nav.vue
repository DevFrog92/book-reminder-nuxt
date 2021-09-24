<template>
  <nav class="nav-wrapper">
    <div class="logo-wrapper">
      <div
        class="logo-link"
        @click="moveToHome"
      />
    </div>
    <Nuxt-link
      class="link"
      to="/report"
    >
      독후감
    </Nuxt-link>

    <Nuxt-link
      class="link"
      to="/search"
    >
      도서검색
    </Nuxt-link>
  </nav>
</template>

<script>
export default {
  methods: {
    moveToHome() {
      this.$router.push("/")
    },
  },
}
</script>

<style scoped>
@font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.nav-wrapper {
  height: 6rem;
  display: flex;
  font-family: 'BMDOHYEON';
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

.logo-wrapper {
  position: absolute;
  left: 50%;
  transform: translate(-50%,0);
  height: 100%;
  width: 7rem;
  height: 6rem;
}

.link {
  margin-right: 1.5rem;
  color: rgba(0,0,0,0.8);
  padding: 0.5rem;
  font-size: .8rem;
  text-decoration: none;
}

.logo-link {
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;
  background-image: url('~assets/images/logo.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}

.logo-link::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 7rem;
  height: 3rem;
  cursor: pointer;
}

.link.nuxt-link-exact-active {
  color: #2AC8A2;
  text-decoration: none;
}

</style>
