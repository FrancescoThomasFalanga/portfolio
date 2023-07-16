<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="mine" id="contact">
    <h2>
      <i class="fa-solid fa-envelope"></i>
      Get In <span style="color: #41b883">Touch</span>
    </h2>

    <div class="container my-form">
      <div class="img">
        <img
          src="https://miro.medium.com/v2/resize:fit:1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
          alt=""
        />
      </div>

      <form action="">
        <div class="things">
          <label class="normal" for="name">
            <i class="fa-solid fa-user"></i>
          </label>
          <input class="form-control" type="text" placeholder="Name" />
        </div>
        <div class="things">
          <label class="normal" for="email">
            <i class="fa-solid fa-envelope"></i>
          </label>
          <input class="form-control" type="email" placeholder="Email" />
        </div>
        <div class="things">
          <label class="normal" for="phone">
            <i class="fa-solid fa-phone"></i>
          </label>
          <input class="form-control" type="number" placeholder="Phone" />
        </div>
        <div class="things">
          <label class="" for="message">
            <i class="fa-solid fa-message"></i>
          </label>
          <textarea
            class="form-control"
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="Message"
          ></textarea>
        </div>

        <button class="ui-btn">
          <span>Submit</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  background-color: white;
  min-height: auto;
  width: 100%;
  position: relative;
  z-index: 2;
  // margin-bottom: 60px;
  padding-top: 40px;
  padding-bottom: 60px;

  h2 {
    padding-top: 60px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 20px;
  }

  .my-form {
    display: flex;
    gap: 40px;
    background-color: #9cd5f3;
    padding: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 30px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.377),
      2px -3px 10px rgba(0, 0, 0, 0.452);

    &:hover {
      box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.664),
        2px -3px 10px rgba(0, 0, 0, 0.712);
    }
    .img {
      img {
        max-width: 500px;
        height: 100%;
        object-fit: cover;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 10px;
      .things {
        position: relative;

        label {
          position: absolute;
          top: 8px;
          left: 6px;
        }

        input,
        textarea {
          padding-left: 30px;
          width: 100%;
          border-color: black;
        }
      }
    }
  }
}
</style>
