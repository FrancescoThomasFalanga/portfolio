<script>
export default {
  data() {
    return {};
  },

  created() {
    async function fetchData(type = "skills") {
      let response;
      type === "skills"
        ? (response = await fetch("skills.json"))
        : (response = await fetch("./projects/projects.json"));
      const data = await response.json();
      return data;
    }

    function showSkills(skills) {
      let skillsContainer = document.getElementById("skillsContainer");
      let skillHTML = "";
      skills.forEach((skill) => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
      });
      skillsContainer.innerHTML = skillHTML;
    }

    fetchData().then((data) => {
      showSkills(data);
    });
  },
};
</script>

<template>
  <div class="mine" id="skills">
    <h2>
      <i class="fa-solid fa-laptop-code"></i>
      Skills and <span style="color: #59be3ac9">Abilities</span>
    </h2>

    <div class="container skills" id="skillsContainer"></div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  background-color: rgb(2, 26, 161);
  background-image: linear-gradient(rgb(0, 38, 255), rgb(51, 255, 0));
  box-shadow: 1px 3px 10px #41b883, 1px -3px 10px #181bcebe;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  // margin-top: 60px;
  padding-top: 60px;
  padding-bottom: 100px;

  h2 {
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
  }

  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    background-color: rgba(0, 0, 0, 0.486);
    padding: 80px 60px 80px;
    border-radius: 50px;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .mine {
    h2 {
      padding: 0;
    }
  }
}
</style>
