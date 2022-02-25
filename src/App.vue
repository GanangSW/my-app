<template>
  <v-app>
    <navigation :color="color" :flat="flat"/>
    <v-main class="pt-0">
            <home/>
            <about/>
            <product/>
            <campaign/>
            <leader/>
            <update/>
    </v-main>
    <v-scale-transition>
      <v-btn
          fab
          v-show="fab"
          v-scroll="onScroll"
          dark
          fixed
          bottom
          right
          color="secondary"
          @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foot/>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import About from "@/components/About";
import Product from "@/components/Product";
import Campaign from "@/components/Campaign";
import Leader from "@/components/Leader";
import Update from "@/components/Update";
import Foot from "@/components/Footer";

export default {
  name: 'App',
  components: {Foot, Update, Leader, Campaign, Product, About, Home, Navigation},
  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  }
};
</script>
<style scoped>
.v-main {
  background-color: #fffcfc;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
