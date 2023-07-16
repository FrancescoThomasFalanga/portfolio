<script>
import Home from "../components/Home.vue";
import AboutMe from "../components/AboutMe.vue";
import Skills from "../components/Skills.vue";
import Education from "../components/Education.vue";
import Projects from "../components/Projects.vue";
import Experience from "../components/Experience.vue";
import Contact from "../components/Contact.vue";

export default {
  data() {
    return {};
  },

  components: {
    Home,
    AboutMe,
    Skills,
    Education,
    Projects,
    Experience,
    Contact,
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
  </div>
</template>

<style lang="scss" scoped></style>
