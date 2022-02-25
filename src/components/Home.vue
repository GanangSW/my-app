<template>
  <section id="home">
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="750">
      <v-container>
        <v-row align="center" justify="center">
          <v-col lg="6" md="6">
            <h1 class="display-2 font-weight-bold mb-4">Be a Leading Star to Lead Indonesia’s Digital Ecosystem</h1>
            <h1 class="font-weight-light">We continue innovating to stay relevant. We are willing to make big bets in
              areas that we feel are important and create meaningful impact to societies.</h1>
            <v-btn
                @click.stop="dialog = true"
                class="white--text  mt-10"
                rounded
                outlined
            ><v-icon class="mr-2">mdi-play-circle</v-icon>Watch Video</v-btn>
          </v-col>
          <v-col lg="6" md="6" class="d-none d-md-flex justify-center align-center">
            <v-img
                src="@/assets/hero.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <youtube
            :player-vars="{ autoplay: 1 }"
            :video-id="videoId"
            @ready="ready"
            @playing="playing"
        />
      </v-card>
    </v-dialog>
  </section>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      videoId: "SFwDJ83GxHE",
    }
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    // eslint-disable-next-line no-unused-vars
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  }
}
</script>

<style scoped>
#home {
  z-index: 0;
}

section {
  position: relative;
}
</style>