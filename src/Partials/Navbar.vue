<script>
export default {
  data() {
    return {
      links: [
        "home",
        "about",
        "skills",
        "education",
        "projects",
        "experience",
        "contact",
      ],

      activeIndex: 0,
    };
  },
};
</script>

<template>
  <nav class="container-fluid">
    <div class="logo">
      <a href="">Ciccio</a>
    </div>

    <div class="links">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a
            :class="index == activeIndex ? 'active' : ''"
            @click="activeIndex = index"
            :href="'#' + link"
            >{{ link.charAt(0).toUpperCase() + link.slice(1) }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0;
  box-shadow: 0px 3px 2px rgb(197, 197, 197);
  background-color: white;
  z-index: 3;
  .logo {
    font-size: 20px;
    font-weight: bold;

    a {
      text-decoration: none;
      color: #002057;
      transition: color 0.6s;

      &:hover {
        transition: all 0.6s;
        color: orange;
      }
    }
  }

  .links {
    ul {
      display: flex;
      gap: 20px;
      padding: 0;
      margin: 0;
      list-style-type: none;

      .active {
        color: #011aff;
        border-bottom: 2px solid #011aff;
      }

      li {
        font-size: 18px;

        a {
          padding-bottom: 5px;
          text-decoration: none;
          color: #002057;
          transition: color 0.3s linear;
          font-weight: 500;

          &:hover {
            transition: all 0.3s linear;
            color: #011aff;
            border-bottom: 2px solid #011aff;
          }
        }
      }
    }
  }
}
</style>
