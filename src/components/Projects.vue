<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Deliveboo",
          desc: "Description: In Progress",
          image: "deliveboo",
          links: {
            view: "https://github.com/FrancescoThomasFalanga/progetto-finale",
            code: "https://github.com/FrancescoThomasFalanga/progetto-finale",
          },
        },
        {
          name: "Barber Shop",
          desc: "Description: In Progress",
          image: "barber-shop",
          links: {
            view: "https://ciccio-dev-avada.netlify.app/",
            code: "https://github.com/FrancescoThomasFalanga/proj-html-vuejs",
          },
        },
        {
          name: "Portfolio Idea",
          desc: "Description: In Progress",
          image: "portfolio",
          links: {
            view: "https://ciccio-dev.netlify.app/",
            code: "https://github.com/FrancescoThomasFalanga/laravel-api",
          },
        },
        {
          name: "DC Comics",
          desc: "Description: In Progress",
          image: "dc-comics",
          links: {
            view: "https://ciccio-dc-comics.netlify.app/",
            code: "https://github.com/FrancescoThomasFalanga/vite-comics",
          },
        },
        {
          name: "Netflix",
          desc: "Description: In Progress",
          image: "boolflix",
          links: {
            view: "https://ciccio-dev-boolflix.netlify.app/",
            code: "https://github.com/FrancescoThomasFalanga/vite-boolflix",
          },
        },
        {
          name: "Whatsapp",
          desc: "Description: In Progress",
          image: "boolzapp",
          links: {
            view: "https://ciccio-dev-boolzap.netlify.app/",
            code: "https://github.com/FrancescoThomasFalanga/vue-boolzapp",
          },
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mine" id="projects">
    <h2>
      <i class="fa-solid fa-diagram-project"></i>
      Projects <span style="color: #41b883">Made</span>
    </h2>

    <div class="box-container">
      <div
        v-for="project in projects"
        class="box tilt"
        style="width: 22rem; margin: 0.5rem"
      >
        <img
          draggable="false"
          :src="'../img/' + project.image + '.png'"
          alt="project"
        />
        <div class="content">
          <div class="tag">
            <h3>{{ project.name }}</h3>
          </div>
          <div class="desc">
            <p>{{ project.desc }}</p>
            <div class="btns">
              <a :href="project.links.view" class="btn" target="_blank"
                ><i class="fas fa-eye"></i> View</a
              >
              <a :href="project.links.code" class="btn" target="_blank"
                >Code <i class="fas fa-code"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-link class="ui-btn mobile" :to="{ name: 'projects' }">
      <span>View All</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
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

@media screen and (max-width: 768px) {
  .mine {
    padding-bottom: 30px;
  }
}
</style>
