<template>
  <section id="campaign">
    <v-container class="mt-15">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col v-scrollanimation sm="4" class="d-none d-md-flex hidden-xs-only">
              <v-img
                  src="@/assets/join.svg"
                  class="d-block ml-auto mr-auto"
                  max-width="200px"
              />
            </v-col>
            <v-col v-scrollanimation cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Let’s start to Lead Indonesia’s Digital Ecosystem</h1>
              <h1 class="font-weight-light">
                Dare to develop and innovate something new, and grow Indonesia's digital economy. Dare to #TakeALeap
              </h1>
              <v-btn rounded outlined href="https://leap.digitalbisa.id/digistar" target="_blank" large color="white" class="mt-4">
                JOIN US
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Campaign"
}
</script>

<style scoped>
#campaign {
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#campaign .container,
#campaign .row {
  height: 100%;
}

.before-enter{
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-in-out;
}

.enter{
  opacity: 1;
  transform: translateY(0px);
}

</style>