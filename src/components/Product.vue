<template>
  <section id="product">
    <v-container class="mt-15 mb-15">
      <v-row justify="center" align="center">
        <v-col cols="10">
          <v-subheader v-scrollanimation class="text-h4 justify-center">Growing Indonesia’s Digital Ecosystem
          </v-subheader>
          <v-divider class="my-6"/>
          <v-col v-scrollanimation>
            <vueper-slides
                class="no-shadow"
                :visible-slides="3"
                slide-multiple
                fixed-height="130px"
                :gap="3"
                :slide-ratio="1 / 4"
                :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 ,arrows:false} }">
              <vueper-slide v-for="(product, i) in products" :key="i" :image="product.image" :link="product.link" open-in-new/>
            </vueper-slides>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "Product",
  components: {VueperSlides, VueperSlide},
  data() {
    return {
      products: [
        {
          image: "https://leap.digitalbisa.id/uploads/products/padi-umkm.png",
          link: "https://padiumkm.id/"
        },
        {
          image: "https://leap.digitalbisa.id/uploads/products/big-box.png",
          link: "https://bigbox.co.id/"
        },
        {
          image: "https://leap.digitalbisa.id/uploads/products/pijar-mahir.png",
          link: "https://www.pijar.info/"
        },
        {
          image: "https://leap.digitalbisa.id/uploads/products/sooltan.png",
          link: "https://mysooltan.co.id/"
        },
        {
          image: "https://leap.digitalbisa.id/uploads/products/myIndiHome.png",
          link: "https://www.indihome.co.id/about-myindihome"
        },
        {
          image: "https://leap.digitalbisa.id/uploads/products/ANTARES-Platform.png",
          link: "https://antares.id/"
        },
      ]
    }
  },
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