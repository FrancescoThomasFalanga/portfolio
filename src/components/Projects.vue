<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="mine" id="4">
    <h2>
      <i class="fa-solid fa-diagram-project"></i>
      Projects <span style="color: #41b883">Made</span>
    </h2>

    <div class="projects"></div>

    <a class="ui-btn" href="#"><span>My Projects</span></a>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  background-color: #05000d;
  min-height: calc(90vh - 40px);
  width: 100%;
  position: relative;
  z-index: 2;
  //   margin-top: 60px;
  padding-top: 70px;

  h2 {
    text-align: center;
    color: white;
  }

  a {
    text-decoration: none;
    width: fit-content;
    margin: 0 auto;
  }
}
</style>
