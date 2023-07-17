<script>
export default {
  data() {
    return {};
  },

  created() {
    // fetch projects start
    function getProjects() {
      return fetch("projects.json")
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    }

    function showProjects(projects) {
      let projectsContainer = document.querySelector(".box-container");
      let projectsHTML = "";
      projects.forEach((project) => {
        projectsHTML += `
        <div class="box tilt" style="width: 22rem; margin: 0.5rem">
      <img draggable="false" src="../img/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`;
      });
      projectsContainer.innerHTML = projectsHTML;
    }

    getProjects().then((data) => {
      showProjects(data);
    });
  },
};
</script>

<template>
  <div class="mine">
    <h2>
      <i class="fa-solid fa-laptop"></i>
      Projects <span style="color: #23b244">Made</span>
    </h2>
    <div class="box-container"></div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  background-image: linear-gradient(blue, green);
  min-height: calc(90vh - 40px);
  width: 100%;
  position: relative;
  z-index: 2;
  padding-top: 70px;

  h2 {
    padding-top: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 40px;
  }
}

.box-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-flow: row wrap;
  padding: 30px 0;
}
</style>
