<script>
export default {
  data() {
    return {
      projects: [
        {
          "name": "Assemblaggi In Conto Terzi",
          "desc": "Description: In Progress",
          "image": "assemblaggiincontoterzi",
          "links": {
            "view": "https://assemblaggiincontoterzi.it/",
            "code": "#"
          }
        },
        {
          "name": "Gruppo Pelizza",
          "desc": "Description: In Progress",
          "image": "gruppopelizza",
          "links": {
            "view": "https://gruppopelizza.it/",
            "code": "#"
          }
        },
          {
          "name": "Gi. La. Srl",
          "desc": "Description: In Progress",
          "image": "gilasrl",
          "links": {
            "view": "https://gi-lasrl.it/",
            "code": "#"
          }
        },
          {
          "name": "Italfer",
          "desc": "Description: In Progress",
          "image": "italfer",
          "links": {
            "view": "https://italfersrl.it/",
            "code": "#"
          }
        },
        {
          "name": "Deliveboo",
          "desc": "Description: In Progress",
          "image": "deliveboo",
          "links": {
            "view": "https://github.com/FrancescoThomasFalanga/progetto-finale",
            "code": "https://github.com/FrancescoThomasFalanga/progetto-finale"
          }
        },
        {
          "name": "Barber Shop",
          "desc": "Description: In Progress",
          "image": "barber-shop",
          "links": {
            "view": "https://ciccio-dev-avada.netlify.app/",
            "code": "https://github.com/FrancescoThomasFalanga/proj-html-vuejs"
          }
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
  padding-top: 80px;
  padding-bottom: 50px;

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
