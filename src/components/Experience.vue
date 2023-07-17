<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="mine" id="experience">
    <h2>
      <i class="fa-solid fa-briefcase"></i>
      My <span style="color: #41b883">Experience</span>
    </h2>

    <div class="container">
      <p>
        At the moment, no <em style="font-weight: bold">Web</em> experience,
        before doing this, I was in the construction field.
        <span style="color: #41b883">A whole different world right?</span> So
        I'm looking forward to finding my first job.
      </p>

      <h2 style="margin-top: 350px">IN PROGRESS</h2>
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
  // margin-top: 60px;
  padding-top: 60px;

  h2 {
    text-align: center;
  }

  p {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 30px;
    text-align: center;
  }
}
</style>
