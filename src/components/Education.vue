<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="mine" id="education">
    <h2>
      <i class="fa-solid fa-graduation-cap"></i>
      My <span style="color: #41b883">Education</span>
    </h2>

    <div class="container my-cards">
      <div class="card-1">
        <div class="img">
          <img
            src="https://gdsit.cdn-immedia.net/2017/12/liceo-galilei-catania.jpg"
            alt="galileo-logo"
          />
        </div>
        <div class="infos">
          <h3>Galileo Galilei State Scientific High School</h3>
          <span
            >Today, as then, the "Galileo Galilei" Scientific and Linguistic
            High School knows how to build educational alliances between
            teachers, students and families.</span
          >
          <h5>2016-2021 | Completed</h5>
        </div>
      </div>

      <div class="card-2">
        <div class="img">
          <img
            src="data:image/png;base64,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"
            alt="boolean-logo"
          />
        </div>
        <div class="infos">
          <h3>Boolean</h3>
          <span
            >Start a tech career from scratch by learning how to program
            websites and web applications.</span
          >
          <h5>2023 | Completed</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  background-color: white;
  min-height: calc(90vh - 40px);
  width: 100%;
  position: relative;
  z-index: 2;
  //   margin-top: 60px;
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    text-align: center;
    font-weight: bold;
  }

  .my-cards {
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;

    .card-1,
    .card-2 {
      display: flex;
      align-items: center;
      gap: 40px;
      background-color: rgba(206, 206, 206, 0.692);
      margin-top: 30px;
      border-radius: 10px;
      box-shadow: 1px 2px 3px rgba(122, 122, 122, 0.651),
        1px -2px 3px rgba(122, 122, 122, 0.651);
      transition: transform 1s;
      transform: scale(1);

      &:hover {
        transition: all 1s;
        transform: scale(1.05);
        cursor: pointer;
      }

      .img {
        img {
          width: 400px;
          max-width: 400px;
          height: 300px;
          object-fit: cover;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }

      .infos {
        h3 {
          font-weight: bold;
          color: #012970;
        }

        h5 {
          padding-top: 15px;
          font-weight: bold;
          color: #41b883;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .mine {
    .my-cards {
      .card-1,
      .card-2 {
        flex-direction: column;
      }
    }

    padding-bottom: 50px;
  }
  .mine .my-cards .card-1 .img img,
  .mine .my-cards .card-2 .img img {
    width: 100%;
    max-width: none;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
  }

  .mine .my-cards .card-2 .img {
    width: 100%;
  }

  .mine .my-cards .card-1 .infos,
  .mine .my-cards .card-2 .infos {
    padding: 0 15px;
  }
}
</style>
