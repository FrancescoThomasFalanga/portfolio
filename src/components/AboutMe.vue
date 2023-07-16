<script>
export default {
  data() {
    return {
      isHome: true,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
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
  <div class="mine" id="1">
    <div class="container d-flex justify-content-center flex-column gap-5">
      <div class="about-me d-flex justify-content-center mt-4">
        <h2>
          <i class="fa-solid fa-user"></i>
          About <span style="color: #41b883">Me</span>
        </h2>
      </div>

      <div class="my-card">
        <div class="my-img">
          <img src="../../public/img/1.jpg" alt="" />
        </div>
        <div class="infos">
          <h3>I'm Francesco</h3>
          <h6>Full Stack Web Developer</h6>

          <p>
            My study in the field of web development has allowed me to deepen
            different programming languages, such as HTML, CSS, JavaScript, PHP.
            I have used this knowledge in various projects, putting my skills
            into practice to create web apps in their small, quality way.
          </p>

          <span style="display: block"
            ><em>Email : </em>francescofalanga.dev@gmail.com</span
          >
          <span><em>Place : </em>Catania, Sicily, Italy</span>

          <div class="resume mt-3 d-flex align-items-center gap-3">
            <a
              class="ui-btn"
              href="https://drive.google.com/file/d/1I3Ey1vBjuSFyqXAT7NOCmZfeCQVkbloP/view?usp=sharing"
              target="_blank"
            >
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  background-color: white;
  width: 100%;
  height: calc(100vh);
  position: relative;
  z-index: 2;
  margin-top: 60px;
}
.about-me {
  h2 {
    font-weight: bold;
  }
}

.my-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  max-width: 800px;
  margin: 50px auto;
  .my-img {
    img {
      max-width: 600px;
      height: 400px;
      object-fit: cover;
      border-radius: 20px;
      filter: grayscale(0.7);
      transform: scale(1);
      transition: all 1s;
      box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.699);

      &:hover {
        filter: grayscale(0);
        transform: scale(1.1);
        transition: all 1s;
        cursor: pointer;
      }
    }
  }

  .infos {
    h6 {
      font-size: 14px;
      font-weight: bolder;
    }

    p {
      font-style: oblique;
      font-weight: 600;
    }

    span {
      em {
        color: #0d25ff;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }

  .resume {
    .ui-btn {
      text-decoration: none;
    }

    .download {
      padding: 20px;
      background-color: #002b75;
      border-radius: 100%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

      &:hover {
        background-color: #0d25ff;
      }
    }
  }
}
</style>
