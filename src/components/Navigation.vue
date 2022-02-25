<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        dark
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/logo.svg" alt="logo">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">My App</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider/>

      <v-list dense>
        <v-list-item
            v-for="([text,link],i) in items"
            :key="i"
            link
            @click="$vuetify.goTo(link)">
          <v-list-item-content>
            <v-list-item-title class="subtitle-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        app
        dark
        :color="color"
        :flat="flat"
        :class="{expand:flat}"
        class="px-15">

      <v-toolbar-title>
        <v-img src="@/assets/logo.svg" max-width="50px"/>
      </v-toolbar-title>
      <v-spacer/>
      <v-app-bar-nav-icon
          @click.stop="drawer=!drawer"
          class="mr-4"
          v-if="isXs"/>
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#home')">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2">About Us</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#product')">
          <span class="mr-2">Product</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#campaign')">
          <span class="mr-2">Campaign</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#leader')">
          <span class="mr-2">Leaders</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#update')">
          <span class="mr-2">Update</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contact Us</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () =>
      ({
        drawer: null,
        isXs: false,
        items: [
          ["Home", '#home'],
          ["About Us", '#about'],
          ["Product", '#product'],
          ["Campaign", '#campaign'],
          ["Leaders", '#leader'],
          ["Update", '#update'],
          ["Contact Us", '#contact'],
        ],
      }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    }
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, {passive: true});
  }
}
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>