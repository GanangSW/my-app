<template>
  <section id="leader">
    <v-container class="mt-15">
      <v-row justify="center" align="center">
        <v-col cols="10">
          <v-subheader v-scrollanimation class="text-h4 justify-center">The Leaders</v-subheader>
          <v-divider class="my-6"/>
          <v-row justify="center" align="top">
            <v-col v-scrollanimation v-for="(leader,index) in leaders" :key="index" align="center">
              <v-img :src="leader.image" max-width="150px"/>
              <h1 class="text-subtitle-1 font-weight-bold mt-2">{{ leader.name }}</h1>
              <h1 class="text-body-1">{{ leader.jabatan }}</h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>

</template>

<script>
export default {
  name: "Leader",
  data() {
    return {
      leaders: [
        {
          name: "M. Fajrin Rasyid",
          jabatan: "Chief Digital And Innovation Officer",
          image: "https://leap.digitalbisa.id/uploads/teams/digital-business-director.jpeg",
        },
        {
          name: "Saiful Hidayat",
          jabatan: "EVP Digital Business & Technology",
          image: "https://leap.digitalbisa.id/uploads/teams/evp-digital-business.jpeg"
        },
        {
          name: "Riza A. N. Rukmana",
          jabatan: "VP Digital Business Strategy & Governance",
          image: "https://leap.digitalbisa.id/uploads/teams/vp-digital-business-strategy.jpeg"
        },
        {
          name: "Widi Nugroho",
          jabatan: "VP Digital Business Performance",
          image: "https://leap.digitalbisa.id/uploads/teams/vp-digital-business-performance.jpeg"
        }
      ],
    }
  }
}
</script>

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