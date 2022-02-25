<template>
  <v-footer
      dark
      padless
  >
    <v-container id="contact" class="pt-15 pb-15">

      <v-row>
        <v-col lg="12">
          <v-card flat class="transparent">

          <v-card-title class="text-h3">
            Keep in touch with us!
          </v-card-title>
          <v-card-text class="text-h5">
            Don't hesitate to send us a message should you have any questions or inquiries.
          </v-card-text>
          <v-card-title class="mt-8">
            Contact Us
          </v-card-title>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>
</style>