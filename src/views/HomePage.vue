<template>
  <div>
    <Header />
    <Slider />
    <section class="restaurant-list">
      <h3 class="title">Restaurantes</h3>
      <RestaurantCard />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
import RestaurantCard from '@/components/RestaurantCard.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    Slider,
    RestaurantCard,
    Footer,
  },
};
</script>

<style scoped>
.restaurant-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ededed;
}
</style>
