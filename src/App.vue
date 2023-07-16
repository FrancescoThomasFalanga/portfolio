<script>
import Navbar from "./Partials/Navbar.vue";
import Footer from "./Partials/Footer.vue";

export default {
  data() {
    return {
      isHome: true,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  components: {
    Navbar,
    Footer,
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 800) {
        this.isHome = false;
      } else {
        this.isHome = true;
      }
    },

    goUp() {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>

    <button @click="goUp()" class="go-up" v-show="!isHome">
      <i class="fa-solid fa-circle-up"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.go-up {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  font-size: 38px;
  color: #41b883;
  z-index: 3;
}
</style>
