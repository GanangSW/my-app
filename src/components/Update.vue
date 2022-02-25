<template>
  <section id="update">
    <v-container class="mt-15">
      <v-row justify="center" align="center">
        <v-col cols="10">
          <v-subheader v-scrollanimation class="text-h4 justify-center">#LeapUpdate</v-subheader>
          <v-divider class="my-6"/>
          <v-row justify="center" align="top">
            <v-col v-scrollanimation lg="3" v-for="(update,index) in updates" :key="index">
              <a :href="update.link" target="_blank">
                <div>
                  <v-img :src="update.image" max-width="200px"/>
                  <h4 class="mt-2 black--text">{{ update.title }}</h4>
                  <p class="grey--text">{{ update.date }}</p>
                </div>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>

</template>

<script>

export default {
  name: "Update",
  data() {
    return {
      updates: [
        {
          title: "Agile Implementation Scrum in Project - Galih Purnomo Fitrianto | Kelas #DigitalBisa",
          image: "https://digitalbisa.id/uploads/podcasts/dt-agile-implementation-scrum-in-project-galih-purnomo-fitrianto-kelas-digitalbisa-rnFSovO9to.png",
          date: "Februari 22, 2022",
          link: "https://digitalbisa.id/podcast/agile-implementation-scrum-in-project-galih-purnomo-fitrianto-kelas-digitalbisa-uErY6"
        },
        {
          title: "First Step to be a Great Project Manager - Ashar & Firman Gunawan | Kelas #DigitalBisa",
          image: "https://digitalbisa.id/uploads/podcasts/dt-agile-implementation-scrum-in-project-galih-purnomo-fitrianto-kelas-digitalbisa-rnFSovO9to.png",
          date: "Februari 22, 2022",
          link: "https://digitalbisa.id/podcast/first-step-to-be-a-great-project-manager-ashar-dan-firman-gunawan-kelas-digitalbisa-uXe2Q"
        },
        {
          title: "Introduction to UI/UX - Bella Dwi Jayanti (Chief Experience Officer TOMPS) I Kelas #DigitalBisa",
          image: "https://digitalbisa.id/uploads/podcasts/dt-agile-implementation-scrum-in-project-galih-purnomo-fitrianto-kelas-digitalbisa-rnFSovO9to.png",
          date: "Februari 22, 2022",
          link: "https://digitalbisa.id/podcast/introduction-to-ui-ux-bella-dwi-jayanti-chief-experience-officer-tomps-i-kelas-digitalbisa-bJ47E"
        },
      ],
    }
  },

}
</script>

<style>

a, a:hover, a:focus, a:active {
  color: inherit;
  text-decoration: none;
}

</style>

<style scoped>
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-in-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>