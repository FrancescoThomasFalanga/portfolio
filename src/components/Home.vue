<script>
export default {
  data() {
    return {
      links: [
        "Home",
        "About",
        "Skills",
        "Education",
        "Projects",
        "Experience",
        "Contact",
      ],

      socials: [
        {
          icon: "fa-brands fa-linkedin",
          goTo: "https://www.linkedin.com/in/francesco-falanga-52b523232/",
        },
        {
          icon: "fa-brands fa-github",
          goTo: "https://github.com/FrancescoThomasFalanga",
        },
        {
          icon: "fa-brands fa-instagram",
          goTo: "https://www.instagram.com/c1cc1o__/",
        },
        { icon: "fa-brands fa-twitter", goTo: "https://twitter.com/blade3124" },
      ],

      activeIndex: 0,
    };
  },
};
</script>

<template>
  <div>
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
              href="#"
              >{{ link }}</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <div class="jumbotron container">
      <div class="who-am-i">
        <h1>Hy there,</h1>
        <h1>I'm Francesco <span style="color: orange">Falanga</span></h1>
        <h4>
          I Am a <span style="color: rgb(156, 0, 0)"> Web Developer </span>
        </h4>

        <button class="ui-btn">
          <span> About me </span>
        </button>

        <div class="social">
          <ul>
            <li v-for="social in socials">
              <a :href="social.goTo" target="_blank">
                <i :class="social.icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="my-img">
        <img src="https://picsum.photos/500 " alt="" />
      </div>
    </div>
  </div>
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

.jumbotron {
  margin-top: 62px;
  color: #002057;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 40%;
  left: 40%;
  transform: translate(-40%, -40%);

  .who-am-i {
    h1 {
      margin-bottom: 10px;
      font-size: 50px;
    }

    h4 {
      margin-bottom: 0;
    }

    .ui-btn {
      --btn-default-bg: #002b75;
      --btn-padding: 15px 20px;
      --btn-hover-bg: #011aff;
      --btn-transition: 0.3s;
      --btn-letter-spacing: 0.1rem;
      --btn-animation-duration: 1.2s;
      --btn-shadow-color: rgba(0, 0, 0, 0.568);
      --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
      --hover-btn-color: #fac921;
      --default-btn-color: #fff;
      --font-size: 17px;
      --font-weight: 600;
      --font-family: Menlo, Roboto Mono, monospace;

      & {
        margin: 20px 0;
        box-sizing: border-box;
        padding: var(--btn-padding);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--default-btn-color);
        font: var(--font-weight) var(--font-size) var(--font-family);
        background: var(--btn-default-bg);
        border: none;
        border-radius: 30px;
        cursor: pointer;
        transition: var(--btn-transition);
        overflow: hidden;
        box-shadow: var(--btn-shadow);
      }

      & span {
        letter-spacing: var(--btn-letter-spacing);
        transition: var(--btn-transition);
        box-sizing: border-box;
        position: relative;
        background: inherit;
      }

      & span::before {
        box-sizing: border-box;
        position: absolute;
        content: "";
        background: inherit;
      }

      &:hover,
      &:focus {
        background: var(--btn-hover-bg);
      }

      &:hover span,
      &:focus span {
        color: var(--hover-btn-color);
      }

      &:hover span::before,
      &:focus span::before {
        animation: chitchat linear both var(--btn-animation-duration);
      }

      @keyframes chitchat {
        0% {
          content: "#";
        }

        5% {
          content: ".";
        }

        10% {
          content: "^{";
        }

        15% {
          content: "-!";
        }

        20% {
          content: "#$_";
        }

        25% {
          content: "№:0";
        }

        30% {
          content: "";
        }

        40% {
          content: "?{4@%";
        }

        45% {
          content: "=.,^!";
        }

        50% {
          content: "?2@%";
        }

        55% {
          content: "\;1}]";
        }

        60% {
          content: "?{%:%";
          right: 0;
        }

        65% {
          content: "|{f[4";
          right: 0;
        }

        70% {
          content: "{4%0%";
          right: 0;
        }

        75% {
          content: "'1_0<";
          right: 0;
        }

        80% {
          content: "{0%";
          right: 0;
        }

        85% {
          content: "]>'";
          right: 0;
        }

        90% {
          content: "4";
          right: 0;
        }

        95% {
          content: "2";
          right: 0;
        }

        100% {
          content: "";
          right: 0;
        }
      }
    }
  }

  .my-img {
    img {
      --m: radial-gradient(circle farthest-side at right, #000 99%, #0000) 0
          100%/46% 92% no-repeat,
        radial-gradient(circle farthest-side at left, #000 99%, #0000) 100% 0/46%
          92% no-repeat;
      -webkit-mask: var(--m);
      mask: var(--m);
      filter: grayscale(0.5);
      transition: 0.3s linear;
      cursor: pointer;
    }
    img:hover {
      -webkit-mask-position: 7.5% 50%, 92.5% 50%;
      mask-position: 7.5% 50%, 92.5% 50%;
      filter: grayscale(0);
    }
  }

  .social {
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 0;
      margin: 0;

      li {
        // background-color: black;
        // padding: 10px;
        border-radius: 50%;

        a {
          text-decoration: none;
          padding: 20px;
          border-radius: 100%;
          background-color: black;
          color: #00d9ff;
          transition: color 0.4s;
          width: 26px;
          height: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;

          &:hover {
            transition: color 0.4s;
            color: white;
          }
        }
      }
    }
  }
}
</style>
