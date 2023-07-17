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
  <div class="mine">
    <div class="my-container">
      <div class="links">
        <div class="left">
          <h3>Ciccio's Portfolio</h3>

          <span style="color: rgb(197, 197, 197)">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </span>

          <span
            style="display: block; margin-top: 50px; color: rgb(197, 197, 197)"
          >
            The geeks will inherit the earth. 💸💸
          </span>
        </div>

        <div class="middle">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#0">
                <i class="fa-solid fa-chevron-right"></i>
                Home</a
              >
            </li>
            <li>
              <a href="#1">
                <i class="fa-solid fa-chevron-right"></i>
                About</a
              >
            </li>
            <li>
              <a href="#2">
                <i class="fa-solid fa-chevron-right"></i>
                Skills</a
              >
            </li>
            <li>
              <a href="#3">
                <i class="fa-solid fa-chevron-right"></i>
                Education</a
              >
            </li>
            <li>
              <a href="#4">
                <i class="fa-solid fa-chevron-right"></i>
                Work</a
              >
            </li>
            <li>
              <a href="#5">
                <i class="fa-solid fa-chevron-right"></i>
                Experience</a
              >
            </li>
            <li>
              <a href="#6">
                <i class="fa-solid fa-chevron-right"></i>
                Contact</a
              >
            </li>
          </ul>
        </div>

        <div class="right">
          <h3>Contact Info</h3>

          <ul>
            <li>
              <i class="fa-solid fa-phone-flip"></i>
              <span>+39 392-509-3153</span>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <span>francescofalanga.dev@gmail.com</span>
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              <span>Catania, Sicily, Italy</span>
            </li>
          </ul>

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
      </div>

      <hr />

      <span class="ciao"
        >Designed With &#10084; By
        <span style="color: #41b883">Ciccio</span></span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  background-color: #05000d;
  width: 100%;
  position: relative;
  z-index: 2;
  //   margin-top: 60px;
  padding-top: 70px;
  color: white;

  .my-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    padding: 0 15px;

    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      //   justify-content: space-between;

      .left {
        max-width: 400px;
      }

      .middle {
        margin-left: 70px;
        flex: 1;

        h3 {
          font-weight: normal;
        }

        ul {
          list-style-type: none;
          padding: 0;

          li {
            margin-top: 5px;
            a {
              padding: 5px;
              text-decoration: none;
              color: white;

              &:hover {
                color: #28b883;
              }
            }
          }
        }
      }

      .right {
        flex: 1;

        h3 {
          font-weight: normal;
        }

        ul {
          list-style-type: none;
          padding: 0;

          li {
            display: flex;
            margin-bottom: 10px;
            gap: 10px;
            align-items: center;

            i {
              color: #28b883;
              height: 20px;
              width: 20px;
              text-align: center;
            }

            span {
              color: rgb(197, 197, 197);
            }
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

              i {
                color: #3de2ff;
              }

              a {
                text-decoration: none;
                padding: 20px;
                border-radius: 100%;
                background-color: rgb(0, 0, 0);
                transition: color 0.4s;
                width: 26px;
                height: 26px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;

                &:hover {
                  transition: background-color 0.4s;
                  background-color: #28b883;
                }
              }
            }
          }
        }
      }
    }
    .ciao {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 768px) {
    .my-container {
      .links {
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        padding: 0 40px;

        .middle {
          border-top: 2px solid white;
          padding-top: 20px;
          margin-left: 0;
          margin-top: 20px;

          ul {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
        }

        .right {
          margin-top: 20px;

          ul {
            li {
              font-size: 14px;
            }
          }
        }

        .social {
          ul {
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
