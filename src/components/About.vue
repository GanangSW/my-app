<template>
  <section id="about">
    <v-container class="mt-15">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center">
            <v-col v-scrollanimation cols="10" class="text-center mr-auto ml-auto">
              <v-subheader class="justify-center text-subtitle-1 font-weight-bold">#OURSTORY</v-subheader>
              <p class="font-weight-bold text-h4">
                As its most fundamental level of every innovation
              </p>
              <p class="mt-5 text-body-1">
                Innovations can change people’s behaviour, it can improve people’s wellbeing, create better social
                welfare
                and present better opportunities that lead to economic growth. Thus, being at the forefront of Telkom’s
                digital transformation, Telkom Digital Business continues to thrive with a mission to grow the digital
                ecosystem in Indonesia through digital innovations by building with our own capabilities, collaboration
                with
                government and global tech giants.
              </p>
              <p class="mt-2 text-body-1">
                Every day, we share the same passion to deliver an innovative solution that has been a complex challenge
                for
                society to accelerate. Our DNA is to create digital innovations, solutions and bring transformations to
                boost Indonesia’s economy and achieve digital sovereignty.
              </p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col v-scrollanimation cols="10" class="text-center mr-auto ml-auto">
              <p class="font-weight-bold text-h4 mt-10">
                Vision and Missions
              </p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col v-scrollanimation lg="6" sm="6" class="d-none d-md-flex hidden-xs-only">
              <v-img
                  src="https://leap.digitalbisa.id/front/img/mission-1.jpeg"
                  class="d-block ml-auto mr-auto"
                  max-width="250px"
              />
            </v-col>
            <v-col v-scrollanimation lg="6" sm="6" class="text-center mr-auto ml-auto">
              <v-subheader class="justify-center text-subtitle-1 font-weight-bold">#VISION</v-subheader>
              <h1 class="text-subtitle-1 font-weight-bold">
                To Digitize the Nations.
              </h1>
              <p class="mt-2 text-body-1">
                We share the same passion for delivering innovative solutions to solve complex social-economic
                challenges
                through digital inclusion to accelerate the realization of national digital sovereignty.
              </p>
              <p class="mt-2 text-body-1">
                As the biggest digital telecommunications company in the country, Telkom creates digital ecosystem that
                provides innovations, solutions, and transformations to present better opportunities for everyone.
              </p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col v-scrollanimation lg="6" sm="6" class="text-center mr-auto ml-auto">
              <v-subheader class="text-subtitle-1 font-weight-bold justify-center">#MISSIONS</v-subheader>
              <h1 class="text-subtitle-1 font-weight-bold">
                Growing Indonesia's Digital Ecosystem
              </h1>
              <p class="mt-2 text-body-1">
                Our main purpose is to create a digital transformation to provide solutions for critical sectors in
                Indonesia. We realize that in order to achieve this mission, we need to implement intersectional and
                multidisciplinary approaches ranging from technology, social, economic, natural science, to other
                respective
                fields to collaborate and lead the digital ecosystem together in Indonesia.
              </p>
            </v-col>
            <v-col v-scrollanimation lg="6" sm="6" class="d-none d-md-flex hidden-xs-only">
              <v-img
                  src="https://images.unsplash.com/photo-1605648916319-cf082f7524a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  class="d-block ml-auto mr-auto"
                  max-width="250px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

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