<template>
  <div>
    <Header />
    <Slider />
    <RestaurantCard />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Slider from './components/Slider.vue';
import RestaurantCard from './components/RestaurantCard.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    RestaurantCard,
    Footer,
  },
};
</script>

<style></style>
