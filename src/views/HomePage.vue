<template>
  <div>
    <Header />
    <Slider />
    <AboutUs />
    <RestaurantList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
import RestaurantList from '@/components/RestaurantList.vue';
import AboutUs from '@/components/AboutUs.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    Slider,
    RestaurantList,
    AboutUs,
    Footer,
  },
};
</script>

<style scoped></style>
