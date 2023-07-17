<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>

<template>
  <div class="header" id="home">
    <div class="jumbotron container">
      <div class="who-am-i">
        <h1>Hey there,</h1>
        <h1>I'm Francesco <span style="color: orange">Falanga</span></h1>
        <h4>
          I Am a <span style="color: rgb(156, 0, 0)"> Web Developer </span>
        </h4>

        <a
          href="#about"
          class="ui-btn"
          style="width: fit-content; text-decoration: none"
        >
          <span> About me <i class="fa-regular fa-circle-down"></i></span>
        </a>

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
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/421/877/non_2x/3d-multitasking-man-free-png.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100vh;
  width: 100%;
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
      max-width: 600px;
      background-color: #ffa500;
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

@media (max-width: 768px) {
  .jumbotron {
    flex-direction: column-reverse;
    top: 35%;
    .my-img {
      img {
        max-width: 300px;
        object-fit: cover;
        margin-bottom: 10px;
      }
    }

    .who-am-i {
      h1 {
        font-size: 30px;
      }
    }
  }
}
</style>
