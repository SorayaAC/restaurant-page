<template>
  <div>
    <Header />
    <Slider />
    <div class="home-wrapper">
      <AboutUs />
      <RestaurantList />
    </div>
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

<style scoped>
.home-wrapper {
  padding: 0 1.5rem 1.5rem 1.5rem;
}
</style>
