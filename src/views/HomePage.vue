<template>
  <div>
    <Header />
    <Slider />
    <div class="home-wrapper">
      <RestaurantList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
import RestaurantList from '@/components/RestaurantList.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    Slider,
    RestaurantList,
    Footer,
  },
};
</script>

<style scoped>
.home-wrapper {
  padding: 0 1.5rem 1.5rem 1.5rem;
}
</style>
