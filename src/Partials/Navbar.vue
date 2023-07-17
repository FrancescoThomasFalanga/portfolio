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
      isMenuOpen: false,
    };
  },
};
</script>

<template>
  <nav class="container-fluid">
    <div class="logo">
      <router-link :to="{ name: 'home' }">Ciccio</router-link>
    </div>

    <div class="hamburger" @click="isMenuOpen = !isMenuOpen">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="links" :class="{ 'show-links': isMenuOpen }">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a
            :class="index == activeIndex ? 'active' : ''"
            @click="activeIndex = index"
            :href="'/#' + link"
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
    display: block;

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
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 25px;
      height: 20px;
      cursor: pointer;

      span {
        display: block;
        height: 2px;
        background-color: #002057;
        transition: background-color 0.3s linear;

        &:nth-child(1) {
          width: 100%;
        }

        &:nth-child(2),
        &:nth-child(3) {
          width: 80%;
        }
      }

      // Stile per l'hamburger aperto
      &.open {
        span {
          background-color: #011aff;
        }
      }
    }
    .links {
      display: none; // Nasconde il menu normale per dimensioni dello schermo ridotte
    }

    .show-links {
      display: block; // Mostra il menu quando l'hamburger menu è aperto
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0px 3px 2px rgb(197, 197, 197);
      z-index: 2;
      padding: 16px 0;

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        li {
          font-size: 18px;
          text-align: center;

          .active {
            border-bottom: none;
          }

          a {
            padding: 0;
            font-weight: normal;
            border-bottom: none;
          }
        }
      }
    }
  }
}

.hamburger {
  display: none;
}
</style>
