<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";

const bannerText = [
  "Children-Centered Empowerment: Nurturing Unique Individuals for a World of Possibilities",
  "We empower children to be independent lifelong learners",
  "Children-Centered Empowerment: Nurturing Unique Individuals for a World of Possibilities"

]
</script>

<template>
  <section class="banner">
    <div class="banner__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 position-relative">
            <Swiper>
              <SwiperSlide v-for="text in bannerText">
                <h2>{{text}}</h2>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="banner__image-wrapper"></div>
  </section>
</template>

<style scoped lang="scss">

</style>