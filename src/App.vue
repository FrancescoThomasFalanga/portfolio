<script>
import Home from "./components/Home.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Education from "./components/Education.vue";
import Projects from "./components/Projects.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

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
    Home,
    AboutMe,
    Skills,
    Education,
    Projects,
    Experience,
    Contact,
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
    <Home></Home>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Education></Education>
    <Projects></Projects>
    <Experience></Experience>
    <Contact></Contact>
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
